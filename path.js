const path = require("path");
console.log(path.dirname("C:/users/nking/OneDrive/Desktop/NodeJS/NodeJsPractice/path.js"))
console.log(path.extname("C:/users/nking/OneDrive/Desktop/NodeJS/NodeJsPractice/path.js"))
console.log(path.basename("C:/users/nking/OneDrive/Desktop/NodeJS/NodeJsPractice/path.js"))
const  p = path.parse("C:/users/nking/OneDrive/Desktop/NodeJS/NodeJsPractice/path.js")
console.log(p.root)