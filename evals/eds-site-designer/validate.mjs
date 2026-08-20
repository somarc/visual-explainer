#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = path.resolve(import.meta.dirname, '../..');
const pluginRoot = path.join(root, 'plugins/eds-site-designer');
const failures = [];

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

function parseJson(relativePath) {
  try {
    return JSON.parse(read(relativePath));
  } catch (error) {
    failures.push(`${relativePath}: invalid JSON (${error.message})`);
    return {};
  }
}

function frontmatter(relativePath) {
  const text = read(relativePath);
  const match = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) {
    failures.push(`${relativePath}: missing YAML frontmatter`);
    return {};
  }

  const values = {};
  let parent = null;
  for (const line of match[1].split('\n')) {
    const field = line.match(/^([a-zA-Z][\w-]*):\s*(.*)$/);
    if (field) {
      const [, key, raw] = field;
      const value = raw.replace(/^['"]|['"]$/g, '');
      values[key] = value || {};
      parent = value ? null : key;
      continue;
    }
    const nested = line.match(/^  ([a-zA-Z][\w-]*):\s*(.*)$/);
    if (nested && parent && typeof values[parent] === 'object') {
      values[parent][nested[1]] = nested[2].replace(/^['"]|['"]$/g, '');
    }
  }
  return values;
}

const catalog = parseJson('.claude-plugin/marketplace.json');
const rootManifest = parseJson('.claude-plugin/plugin.json');
const pluginManifest = parseJson('plugins/eds-site-designer/.claude-plugin/plugin.json');
const visualManifest = parseJson('plugins/visual-explainer/.claude-plugin/plugin.json');
const packageManifest = parseJson('package.json');
const skill = frontmatter('plugins/eds-site-designer/SKILL.md');
const entry = catalog.plugins?.find((plugin) => plugin.name === 'eds-site-designer');

if (!entry) failures.push('marketplace: missing eds-site-designer entry');
if (entry && !fs.existsSync(path.join(root, entry.source))) failures.push(`marketplace: source does not exist (${entry.source})`);
if (pluginManifest.name !== 'eds-site-designer') failures.push('plugin manifest: name must be eds-site-designer');
if (skill.name !== 'eds-site-designer') failures.push('SKILL.md: name must be eds-site-designer');
if (!skill.description) failures.push('SKILL.md: description is required');
if (entry?.version !== pluginManifest.version) failures.push('marketplace and plugin manifest versions differ');
if (!skill.metadata?.version) failures.push('SKILL.md: metadata version is missing');
if (skill.metadata?.version !== pluginManifest.version) failures.push('SKILL.md and plugin manifest versions differ');
if (rootManifest.name !== catalog.name) failures.push('root plugin and marketplace names differ');
if (rootManifest.version !== catalog.metadata?.version) failures.push('root plugin and marketplace metadata versions differ');
if (packageManifest.version !== rootManifest.version) failures.push('package and marketplace distribution versions differ');
if (!packageManifest.files?.includes('plugins/eds-site-designer')) failures.push('package files omit plugins/eds-site-designer');
if (!packageManifest.pi?.skills?.includes('./plugins/eds-site-designer')) failures.push('Pi skills omit eds-site-designer');
if (!packageManifest.pi?.prompts?.includes('./plugins/eds-site-designer/commands')) failures.push('Pi prompts omit eds-site-designer commands');
const visualEntry = catalog.plugins?.find((plugin) => plugin.name === 'visual-explainer');
if (visualEntry?.version !== visualManifest.version) failures.push('visual-explainer marketplace and plugin manifest versions differ');

const commandDir = path.join(pluginRoot, 'commands');
const commandFiles = fs.readdirSync(commandDir).filter((file) => file.endsWith('.md')).sort();
const commandNames = new Set();
for (const file of commandFiles) {
  const relativePath = `plugins/eds-site-designer/commands/${file}`;
  const meta = frontmatter(relativePath);
  if (!meta.name) failures.push(`${relativePath}: command name is required`);
  if (!meta.description) failures.push(`${relativePath}: command description is required`);
  if (meta.name && commandNames.has(meta.name)) failures.push(`${relativePath}: duplicate command name ${meta.name}`);
  if (meta.name) commandNames.add(meta.name);

  const commandText = read(relativePath);
  for (const match of commandText.matchAll(/`(?:\.\.\/|\.\/)?templates\/([^`]+)`/g)) {
    const target = path.join(pluginRoot, 'templates', match[1]);
    if (!fs.existsSync(target)) failures.push(`${relativePath}: missing referenced template templates/${match[1]}`);
  }
}

const skillText = read('plugins/eds-site-designer/SKILL.md');
for (const match of skillText.matchAll(/`\.\/(references|templates)\/([^`]+)`/g)) {
  const target = path.join(pluginRoot, match[1], match[2]);
  if (!fs.existsSync(target)) failures.push(`SKILL.md: missing referenced file ./${match[1]}/${match[2]}`);
}

const evalCases = fs.readdirSync(path.join(root, 'evals/eds-site-designer/cases')).filter((file) => file.endsWith('.md'));
if (commandFiles.length < 4) failures.push(`expected at least 4 stage commands, found ${commandFiles.length}`);
if (evalCases.length < 3) failures.push(`expected at least 3 eval cases, found ${evalCases.length}`);

const fixtureRoot = path.join(root, 'evals/eds-site-designer/fixtures/sticky-product-detail');
for (const file of ['README.md', 'styles.css', 'long.html', 'short.html', 'missing-media.html', 'long-title.html', 'no-action.html', 'authored-variants.json', 'expected-ownership.md']) {
  if (!fs.existsSync(path.join(fixtureRoot, file))) failures.push(`sticky fixture: missing ${file}`);
}
const variants = parseJson('evals/eds-site-designer/fixtures/sticky-product-detail/authored-variants.json');
if (!Array.isArray(variants.variants) || variants.variants.length < 5) failures.push('sticky fixture: expected at least 5 authored variants');
for (const variant of variants.variants || []) {
  const file = `${variant.name}.html`;
  if (!fs.existsSync(path.join(fixtureRoot, file))) {
    failures.push(`sticky fixture: declared variant ${variant.name} has no runnable ${file}`);
    continue;
  }
  const html = read(`evals/eds-site-designer/fixtures/sticky-product-detail/${file}`);
  if (!/^<!doctype html>/i.test(html)) failures.push(`sticky fixture: ${file} is not a complete HTML document`);
  if (!html.includes('class="product-detail"')) failures.push(`sticky fixture: ${file} lacks product-detail markup`);
}

if (failures.length) {
  console.error(`eds-site-designer validation failed (${failures.length})`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('eds-site-designer validation passed');
console.log(`- commands: ${commandFiles.length}`);
console.log(`- eval cases: ${evalCases.length}`);
console.log(`- plugin version: ${pluginManifest.version}`);
