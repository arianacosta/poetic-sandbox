const path = require("path"); // @typescript-eslint/no-var-requires warn

var item = abc; // no-var

const item = new Object(); // no-new-object

const obj = {
  doubleQuotes: doubleQuotes // object-shorthand
};

function myFuncA(num) {
  return num++; // no-plusplus
}

const myFuncB = num => {
  num + 1; // no-unused-expressions
};
