import http from "http";
import path from "path";
import url from 'url';


const server = http.createServer((request, response) => {
  let { method } = request;
  let { pathname } = new URL(request.url, "http://127.0.0.1");
  console.log(method);
  console.log(pathname);
})

server.listen(9001, () => {
  console.log("start");
})