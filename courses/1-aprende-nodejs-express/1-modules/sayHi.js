function sayHiFunction(name) {
  return `Hi ${name}`;
}

const sayHiArrowFunction = (name) => `Hi ${name}`;

module.exports = {
  sayHiFunction,
  sayHiArrowFunction,
  sayHiInlineFunction: (name, lastname) =>
    `Hi ${name} ${lastname} from inline function`,
};

//* Module exports examples

// module.exports = {
//   sayHi: sayHiFunction,
//   sayHiArrow: sayHiArrowFunction,
//   sayHiInlineFunction: (name, lastname) => `Hi ${name} ${lastname}`,
// };
// module.exports = { sayHiFunction, sayHiArrowFunction };
// module.exports.sayHiFunction = sayHiFunction;
// module.exports.sayHiArrowFunction = sayHiArrowFunction;
