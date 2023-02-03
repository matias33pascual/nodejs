const path = require("path");

const filePath = path.join("/free-code-camp/", "examples", "path-example.js");

console.log(path);
console.log(path.sep);
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "path-example.js");
console.log(__dirname);
console.log(absolute);
