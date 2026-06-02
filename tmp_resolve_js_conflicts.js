const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, 'resources', 'js');
const files = [];
function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full);
    else if (name.endsWith('.js') || name.endsWith('.jsx')) files.push(full);
  }
}
walk(root);
let changed = 0;
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  if (!text.includes('<<<<<<< HEAD')) continue;
  const lines = text.split(/\r?\n/);
  const out = [];
  let i = 0;
  while (i < lines.length) {
    if (lines[i].startsWith('<<<<<<< HEAD')) {
      i++;
      while (i < lines.length && !lines[i].startsWith('=======')) i++;
      if (i >= lines.length) break;
      i++;
      while (i < lines.length && !lines[i].startsWith('>>>>>>>')) {
        out.push(lines[i]);
        i++;
      }
      if (i >= lines.length) break;
      i++;
    } else {
      out.push(lines[i]);
      i++;
    }
  }
  fs.writeFileSync(file, out.join('\n') + (text.endsWith('\n') ? '\n' : ''), 'utf8');
  changed++;
}
console.log('changed', changed, 'files');
