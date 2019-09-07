var item = abc; // expected no-var

const item = new Object(); // expected no-new-object

const prop = 'some prop';
const obj = {
  prop: prop, // expected object-shorthand
};

const doubleQuotes = "Capt. Janeway"; // expected quotes

const hello = 'world'
[1].forEach(); // expected no-unexpected-multiline

const this_is_my_object = {}; // expected camelcase

const foo = function () { }; // expected func-names and no-empty-function


