import http from "http";
import url from 'url';


const server = http.createServer((request, response) => {

  response.end("end");
})

server.listen(9001, () => {
  console.log("start");
})