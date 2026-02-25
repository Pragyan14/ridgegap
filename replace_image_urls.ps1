$files = Get-ChildItem -Path 'e:\CTMS\ridgegap-next' -Recurse -Include '*.tsx', '*.ts', '*.js', '*.json' |
Where-Object { $_.FullName -notmatch '\\node_modules\\|\\\.next\\' }

$pattern = 'https://ridgegap\.com/wp-content/[^"''\s)]+/([^"''\s)/]+)'
$count = 0

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    if ($content -match $pattern) {
        $newContent = [regex]::Replace($content, $pattern, '/images/$1')
        [System.IO.File]::WriteAllText($file.FullName, $newContent, [System.Text.Encoding]::UTF8)
        Write-Host "Updated: $($file.FullName)"
        $count++
    }
}

Write-Host "Total files updated: $count"
