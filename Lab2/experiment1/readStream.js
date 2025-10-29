const fs = require('fs');

const filePath = 'data.txt';


fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) {
    console.error("Error: File does not exist!");
    return;
  }

  const readable = fs.createReadStream(filePath, { encoding: 'utf8' });

  readable.on('data', (chunk) => {
    console.log("File Content:\n", chunk);
  });

  readable.on('error', (err) => {
    console.error("Error reading file:", err.message);
  });
});
