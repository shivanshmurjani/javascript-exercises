const add = function(num1, num2) {
    return num1+num2;
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(values) {
  let res = 0;
  for(let value of values){
    res+=value;
  }
  return res;
};

const multiply = function(values) {
  let res = 1;
  for(let value of values){
    res *= value;
  }
  return res;
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num) {
	let res = 1;
  for(let i = num; i > 0; i--){
    res = res * i;
  }
  return res;
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
