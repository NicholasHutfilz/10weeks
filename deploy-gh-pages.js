const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Step 1: Build the Next.js app
console.log('Building Next.js app...');
execSync('npm run build', { stdio: 'inherit' });

// Step 2: Copy images to the correct location
console.log('Copying images to out directory...');
const sourceDir = path.join(__dirname, 'public', 'images');
const targetDir = path.join(__dirname, 'out', 'images');

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Copy all files from source to target
const files = fs.readdirSync(sourceDir);
files.forEach(file => {
  const sourcePath = path.join(sourceDir, file);
  const targetPath = path.join(targetDir, file);
  fs.copyFileSync(sourcePath, targetPath);
  console.log(`Copied ${file} to ${targetDir}`);
});

console.log('Deployment build complete! You can now deploy the "out" directory to GitHub Pages.'); 