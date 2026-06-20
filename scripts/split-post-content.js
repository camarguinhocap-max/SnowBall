/**
 * split-post-content.js
 *
 * Migra cada post de src/data/posts/*.ts para o formato separado:
 *   src/data/posts/<slug>.ts        → apenas metadados (PostMeta), sem content
 *   src/data/posts-content/<slug>.ts → apenas o content (string)
 *
 * Uso: node scripts/split-post-content.js
 */

const fs   = require('fs');
const path = require('path');

const POSTS_DIR   = path.join(__dirname, '../src/data/posts');
const CONTENT_DIR = path.join(__dirname, '../src/data/posts-content');

if (!fs.existsSync(CONTENT_DIR)) {
  fs.mkdirSync(CONTENT_DIR, { recursive: true });
}

const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.ts'));

let ok = 0, skipped = 0, errors = 0;

for (const file of files) {
  const filePath = path.join(POSTS_DIR, file);
  const src = fs.readFileSync(filePath, 'utf8');

  // ── Extract content value ──────────────────────────────────────────────────
  // Supports both backtick template literals and regular quoted strings.
  // We look for:  content: `...`  or  content: "..."  or  content: '...'
  // using a regex that captures everything between the delimiters (non-greedy
  // for quotes, lazy for backticks which can span many lines).

  const backtickMatch = src.match(/content:\s*`([\s\S]*?)`\s*[,}]/);
  const singleMatch   = src.match(/content:\s*'([\s\S]*?)'\s*[,}]/);
  const doubleMatch   = src.match(/content:\s*"([\s\S]*?)"\s*[,}]/);

  const match = backtickMatch || singleMatch || doubleMatch;

  if (!match) {
    console.warn(`⚠  ${file}: could not find content field — skipped`);
    skipped++;
    continue;
  }

  const rawContent = match[1];

  // ── Write content file ────────────────────────────────────────────────────
  const contentFile = path.join(CONTENT_DIR, file);
  // Escape any backticks inside the content so the template literal is valid
  const escaped = rawContent.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
  const contentTs = `// Auto-generated — do not edit manually. Edit the source post file instead.\nexport const content = \`${escaped}\`;\n`;
  fs.writeFileSync(contentFile, contentTs, 'utf8');

  // ── Rewrite meta file (remove content field) ──────────────────────────────
  // Strategy: remove the entire  content: `...`,  block (including trailing comma)
  let newSrc = src;

  if (backtickMatch) {
    // Remove  content: `...`,  (with optional trailing comma + newline)
    newSrc = newSrc.replace(/\s*content:\s*`[\s\S]*?`\s*,?/, '');
  } else if (singleMatch) {
    newSrc = newSrc.replace(/\s*content:\s*'[\s\S]*?'\s*,?/, '');
  } else if (doubleMatch) {
    newSrc = newSrc.replace(/\s*content:\s*"[\s\S]*?"\s*,?/, '');
  }

  // Update the import to use PostMeta instead of Post
  newSrc = newSrc.replace(
    /import\s*\{\s*Post\s*\}\s*from\s*["']\.\.\/types["']/,
    'import { PostMeta } from "../types"'
  );

  // Update the type annotation on the export
  newSrc = newSrc.replace(/export const post:\s*Post\s*=/, 'export const post: PostMeta =');

  fs.writeFileSync(filePath, newSrc, 'utf8');

  ok++;
}

console.log(`\n✅  Done — ${ok} posts migrated, ${skipped} skipped, ${errors} errors`);
console.log(`Content files written to: ${CONTENT_DIR}`);
