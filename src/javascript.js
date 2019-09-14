var item = abc; // no-var

const item = new Object(); // no-new-object

// object-shorthand
const doubleQuotes = "Double Quotes"; // quotes

const obj = {
  doubleQuotes: doubleQuotes // object-shorthand
};

function myFuncA(num) {
  return num++; // no-plusplus
}

const myFuncB = num => {
  num + 1; // no-unused-expressions
};
