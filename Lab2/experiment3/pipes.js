const fs = require('fs');

const readable = fs.createReadStream('input.txt', { encoding: 'utf8' });
const writable = fs.createWriteStream('output.txt');

// Pipe readable stream into writable stream
readable.pipe(writable);

writable.on('finish', () => {
  console.log("✅ File copied successfully (input.txt → output.txt)");
});

readable.on('error', (err) => {
  console.error("Error reading input.txt:", err.message);
});

writable.on('error', (err) => {
  console.error("Error writing output.txt:", err.message);
});
