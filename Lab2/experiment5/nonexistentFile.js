const fs = require('fs');

const readable = fs.createReadStream('nofile.txt', { encoding: 'utf8' });

readable.on('data', (chunk) => {
  console.log(chunk);
});

readable.on('error', (err) => {
  console.error("⚠️ Stream Error:", err.message);
});
