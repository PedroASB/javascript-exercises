const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, num) => sum + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((prod, num) => prod * num, 1);
};

const power = function(a, b) {
	let pow = 1;
  while(b--) pow *= a;
  return pow;
};

const factorial = function(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) fact *= i;
  return fact;
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
