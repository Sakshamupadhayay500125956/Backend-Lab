const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello, this is my server!");
  res.end();
}).listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
