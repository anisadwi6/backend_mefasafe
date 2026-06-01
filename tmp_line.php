<?php
$lines = file('vendor/laravel/framework/src/Illuminate/Http/Request.php');
for ($i = 110; $i < 130; $i++) {
    echo ($i + 1) . ': ' . $lines[$i] . PHP_EOL;
}
