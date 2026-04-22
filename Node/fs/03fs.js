import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// 写入文件 异步写入
// fs.writeFile("./abc.txt", "ces123", err => {
//   if (err) {
//     console.log("写入失败")
//     return;
//   }
//   console.log("写入成功");
// })

// // 追加
// fs.appendFile("./abc.txt", "456", err => {
//   if (err) {
//     console.log("追加失败");
//     return;
//   }
//   console.log("追加成功");
// })
// 同步追加
// fs.appendFileSync("./abc.txt", "789");

// 同步
// fs.writeFileSync("./data.txt", "test123")
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname)