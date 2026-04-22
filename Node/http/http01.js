import http from "http";

const server = http.createServer((request, response) => {
  response.end("end")
});

server.listen(9000, () => {
  console.log("server start.....");
})