import { error } from "console";
import fs from "fs";

// 异步
// fs.readFile("./abc.txt", (error, data) => {
//   if (error) {
//     console.log("读取文件失败");
//     return;
//   }
//   console.log(data.toString());
// })

// // 同步
// const f = fs.readFileSync("./abc.txt");
// console.log(f.toString());

const r = fs.createReadStream("./abc.txt");
r.on('data', chunk => {
  console.log("长度:", chunk.length)
  console.log(chunk.toString())
})
r.on("end", () => {
  console.log("读取完成");
})