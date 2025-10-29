const fs = require('fs');

const writable = fs.createWriteStream('output.txt');

writable.write("Hello, Node.js!", 'utf8', () => {
  console.log("✅ Data written successfully to output.txt");
});

writable.end();
