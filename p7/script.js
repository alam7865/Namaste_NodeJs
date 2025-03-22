// const fs = require("fs");
const http = require("http");

const server = http.createServer(function (req, res) {
  console.log("HIIIIIII");
  res.end("Hello World");
});

server.listen(8000, () => console.log("Server Started on port 8000"));
