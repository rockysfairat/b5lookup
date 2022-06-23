const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("Hey!");
});

server.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
