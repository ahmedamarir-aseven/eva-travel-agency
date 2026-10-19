const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  let entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  console.log('Copying static build to dist folder...');
  if (fs.existsSync('dist/client')) {
    // 1. Copy dist/client contents to a temporary directory
    const tempDir = 'dist_temp_client';
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
    copyDir('dist/client', tempDir);

    // 2. Clean the dist directory
    fs.rmSync('dist', { recursive: true, force: true });

    // 3. Copy files from temp directory back to the root of dist
    copyDir(tempDir, 'dist');

    // 4. In SPA mode, copy _shell.html to index.html and 404.html
    const shellPath = path.join('dist', '_shell.html');
    if (fs.existsSync(shellPath)) {
      fs.copyFileSync(shellPath, path.join('dist', 'index.html'));
      fs.copyFileSync(shellPath, path.join('dist', '404.html'));
      console.log('Created index.html and 404.html from _shell.html');
    }

    // 5. Clean up temp directory
    fs.rmSync(tempDir, { recursive: true, force: true });
  } else {
    // Fallback to .output/public
    if (fs.existsSync('dist')) {
      fs.rmSync('dist', { recursive: true, force: true });
    }
    if (fs.existsSync('.output/public')) {
      copyDir('.output/public', 'dist');
    }
  }
  console.log('Successfully copied static build to dist/!');
} catch (err) {
  console.error('Error copying build:', err);
  process.exit(1);
}
