from pathlib import Path
p = Path('vendor/laravel/framework/src/Illuminate/Http/Request.php')
lines = p.read_text(encoding='utf-8').splitlines()
for i, line in enumerate(lines[110:130], start=111):
    print(f'{i}: {line}')
