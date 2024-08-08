const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '.env');
const dest = path.join(__dirname, 'node_modules', 'react-email', '.env');

fs.copyFile(src, dest, (err) => {
  if (err) {
    console.error('Error copying .env file:', err);
  } else {
    console.log('.env file copied successfully');
  }
});
