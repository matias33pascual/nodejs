const { readFileSync, writeFileSync } = require("fs");
const { readFile, writeFile } = require("fs");

const textFile = readFileSync(`${__dirname}/files/hello.txt`, "utf-8");
console.log(`textFile: ${textFile.toLowerCase()}`);

writeFileSync(
    `${__dirname}/files/goodbye.txt`,
    `Goodbye from the file-example \n`,
    { flag: "a" } // append the string to the file
);

// this is an async method
readFile(`${__dirname}/files/hello.txt`, "utf-8", (error, result) => {
    if (error) {
        console.log(error);
    }
    console.log(`end of readFile: ${result.toString()}`);
});

// this is an async method
writeFile(
    `${__dirname}/files/goodbye-2.txt`,
    "Hello again! from file-example.js" + "\n",
    { flag: "a" },
    (error, result) => {
        if (error) console.log(error);

        console.log("end of writeFile");
    }
);

console.log("this is the end of the module");
