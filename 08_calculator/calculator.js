const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function (numbers) {
  return numbers.reduce((total, number) => total + number, 0)

};

const multiply = function (numbers) {
  return numbers.reduce((first, second) => first * second);
};

const power = function (a, b) {
	return a**b
};

const factorial = function (a) {
  if (a === 0) return 1;
  let product = 1;
  for (let i = a; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
