<?php
$files = glob('vendor/**/Request.php', GLOB_BRACE);
foreach ($files as $file) {
    $lines = file($file);
    if (!$lines) continue;
    echo "FILE: $file\n";
    echo "  line 117: " . (isset($lines[116]) ? trim($lines[116]) : '[missing]') . "\n";
    $l = @php_check_syntax($file, $out);
    echo '  syntax=' . ($l ? 'ok' : 'bad') . "\n";
    if (!$l) echo '  out=' . $out . "\n";
}
