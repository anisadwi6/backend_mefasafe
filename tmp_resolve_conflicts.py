from pathlib import Path
import sys
root = Path('resources/js')
files = list(root.rglob('*.js')) + list(root.rglob('*.jsx'))
changed = []
for file in files:
    text = file.read_text(encoding='utf-8')
    if '<<<<<<< HEAD' not in text:
        continue
    lines = text.splitlines()
    out = []
    i = 0
    while i < len(lines):
        if lines[i].startswith('<<<<<<< HEAD'):
            i += 1
            while i < len(lines) and not lines[i].startswith('======='):
                i += 1
            if i >= len(lines):
                print('Malformed conflict no ======= in', file)
                sys.exit(1)
            i += 1
            while i < len(lines) and not lines[i].startswith('>>>>>>>'):
                out.append(lines[i])
                i += 1
            if i >= len(lines):
                print('Malformed conflict no >>>>>>> in', file)
                sys.exit(1)
            i += 1
        else:
            out.append(lines[i])
            i += 1
    file.write_text('\n'.join(out) + ('\n' if text.endswith('\n') else ''), encoding='utf-8')
    changed.append(str(file))
print('Changed', len(changed), 'files')
for f in changed:
    print(f)
