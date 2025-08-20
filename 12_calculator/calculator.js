const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
  return array.reduce((product, current) => product * current)
};

const power = function(num , power) {
   
    return Math.pow(num, power);
};

const factorial = function(arr) {
	if (arr === 0)
    return 1;
  else if (arr === 1)
      return 1;
  else if (arr < 0)
      return 1;
  else {
    let num = arr;
    let result = 1;
    while (num > 1)
    {
      result *= num;
      num--;
    }
    return result;
  }
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
