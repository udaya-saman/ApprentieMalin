# Kill any running Node.js processes
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force

# Remove build artifacts and cache
if (Test-Path ".next") {
    Remove-Item -Recurse -Force ".next"
}
if (Test-Path "node_modules/.cache") {
    Remove-Item -Recurse -Force "node_modules/.cache"
}

# Clear npm cache
npm cache clean --force

# Start Next.js dev server
npm run dev 