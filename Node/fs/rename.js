import fs from "fs";

// fs.rename("./abc.txt", "./aabc.txt", error => {
//   if (error) {
//     console.log("错误");
//     return;
//   }
// })

// fs.unlink("./aabc.txt", err => {
//   if (err) {
//     console.log("错误");
//     return;
//   }
// })

// fs.rm("./bbb.txt", err => {
//   if (err) {
//     console.log("err");
//     return;
//   }
// })

// 读取文件夹
const files = fs.readdirSync("./");
// console.log(files);
let count = 0;
files.forEach(item => {
  count++;
  let num;
  if (count < 10) {
    num = '0' + count;
  } else {
    num = count;
  }
  let newName = num + item
  fs.renameSync(`./${item}`, `./${newName}`);
})