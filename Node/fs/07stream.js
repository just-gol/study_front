import fs from "fs";
const ws = fs.createWriteStream("./bbb.txt");

ws.write("1")
ws.write("2")
ws.write("3")

