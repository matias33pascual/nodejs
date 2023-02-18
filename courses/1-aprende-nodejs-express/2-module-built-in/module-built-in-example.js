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

processExamples();
