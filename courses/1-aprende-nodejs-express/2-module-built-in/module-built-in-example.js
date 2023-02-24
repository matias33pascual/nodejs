const os = require("os");
const fs = require("fs");

//* module built-in
//* also called modules-core

const consoleExamples = () => {
  console.log("Hello world");
  console.warn("This is a warning !!!");
  console.error("And this is an error ... ");

  console.error(new Error("This is an error, relax"));
};

const processExamples = () => {
  console.log("---------------- ENV ----------------");
  console.log(process.env);

  console.log("\n************************** \n");

  console.log("--------------- ARGV ----------------");
  //* use npm run argv for see in running

  console.log(process.argv);
  //        [node, app.js, arg1, arg2]
  // index:   0     1       2     3

  console.log(process.argv[2]);

  for (let i = 2; i < process.argv.length; i++) {
    console.log(`Argv from for cicle: ${process.argv[i]}`);
  }

  console.log(
    `Memory in use: ${process.memoryUsage().heapUsed}`,
    `\nTotal memory: ${process.memoryUsage().heapTotal}`,
    `\nYou are using %${memoryUsageInPercent()}`
  );
};

const memoryUsageInPercent = () =>
  (
    (process.memoryUsage().heapUsed * 100) /
    process.memoryUsage().heapTotal
  ).toPrecision(4);

const OSExamples = () => {
  console.log(os.type());
  console.log(os.arch());
  console.log(os.release());
  console.log(os.platform());
  console.log(os.homedir());
  console.log(os.uptime());
  console.log(os.userInfo());
};

const timersExamples = () => {
  setTimeout((name) => console.log(`Hi ${name}!`), 1500, "Mat");

  const helloInterval = setInterval(() => console.log("Goodbye!"), 1000);
  const goodbyeInterval = setInterval(() => console.log("Hello world!"), 1000);

  setTimeout(() => {
    console.log("Goodbye interval finished");
    clearInterval(goodbyeInterval);
  }, 4000);

  setTimeout(() => {
    console.log("Hello interval finished");
    clearInterval(helloInterval);
  }, 5000);

  const plusFunction = (a, b) => console.log(a + b);

  setTimeout(plusFunction, 3000, 5, 6);
};

const timersExamples2 = () => {
  console.log("Actual cicle");
  setImmediate((name) => console.log(`Next cicle -> Hi ${name}`), "Mat");
  console.log("Actual cicle");
};

const fsExamples = () => {
  const obj = {
    id: "33",
    name: "Mat",
  };

  const path = "/mat.json";

  fs.writeFile(path, JSON.stringify(obj), (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
  });

  // fs.appendFile(path, "data", (err) => {
  // if (err) {
  // throw err;
  // }
  // console.log("new data added to file");
  // });

  // fs.rename("old.json", "new.json", (err) => {
  //   if (err) {
  //     throw err;
  //   }
  //   console.log("Name changed");
  // });
};

fsExamples();
