#!/usr/bin/env node
// Fails (nonzero exit) if lang.js declares the same TRANSLATIONS key more than once.
// This is what let the original duplicate-key bugs (conflicting prices, offer names,
// and CTA text silently overwriting correct HTML) ship undetected — see
// AUDIT-REPAIR-BEFORE-STATE.md for the incident this guards against.

const fs = require('fs');
const path = require('path');

const langPath = path.join(__dirname, '..', 'lang.js');
const src = fs.readFileSync(langPath, 'utf8');

const start = src.indexOf('const TRANSLATIONS = {');
const end = src.indexOf('\n};', start);
if (start === -1 || end === -1) {
  console.error('check-duplicate-keys: could not locate TRANSLATIONS object in lang.js');
  process.exit(1);
}
const body = src.slice(start, end);

const keyRe = /^\s*'([a-zA-Z0-9_.]+)':\s*\{/gm;
const seen = new Map();
const dupes = [];
let m;
while ((m = keyRe.exec(body)) !== null) {
  const key = m[1];
  const lineNo = src.slice(0, start + m.index).split('\n').length;
  if (seen.has(key)) {
    dupes.push({ key, firstLine: seen.get(key), dupeLine: lineNo });
  } else {
    seen.set(key, lineNo);
  }
}

if (dupes.length > 0) {
  console.error(`check-duplicate-keys: found ${dupes.length} duplicate TRANSLATIONS key(s) in lang.js\n`);
  for (const d of dupes) {
    console.error(`  '${d.key}' — first declared at line ${d.firstLine}, duplicated at line ${d.dupeLine}`);
  }
  console.error('\nJavaScript object literals silently let the later declaration win, which is exactly');
  console.error('how the original pricing/offer-name/CTA bugs shipped. Remove the duplicate(s) above.');
  process.exit(1);
}

console.log(`check-duplicate-keys: OK — ${seen.size} unique keys, no duplicates.`);
process.exit(0);
