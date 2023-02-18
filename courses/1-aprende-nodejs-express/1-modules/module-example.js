//* Module inclusion examples

const sayHi = require("./sayHi.js");
const { sayHiArrowFunction, sayHiInlineFunction } = require("./sayHi.js");

const runExample = () => {
  console.log(sayHi.sayHiFunction("Mat from function"));
  console.log(sayHi.sayHiArrowFunction("Mat from arrow function"));
  console.log(sayHi.sayHiInlineFunction("Mat", 33));
  console.log(sayHiArrowFunction("Mat"));
  console.log(sayHiInlineFunction("Mat"));
};

module.exports = { runExample };
