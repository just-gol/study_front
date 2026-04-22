import http from "http";
import url from 'url';


const server = http.createServer((request, response) => {
  let res = url.parse(request.url, true);
  let pathname = res.pathname;
  console.log(pathname);
  let kw = res.query.keyword;
  console.log(kw);
  response.end("end");
})

server.listen(9999, () => {
  console.log("start");
})