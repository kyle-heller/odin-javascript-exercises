const add = function(num1=0, num2=0) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;

};

const sum = function(array) {
  let output = 0;
    for (let i = 0; i < array.length; i++) {
      output += Number(array[i]);
    }
    return output;
  }
  // return array.reduce((total, current) => total + current, 0);

// };

const multiply = function(array) {
  let output = 1; 
 
  // Loop over the array starting from index 0 to it's length. 
  for (let i = 0; i < array.length; ++i) { 
    output *= Number(array[i]); 
  } 
  return output;
};

const power = function(num, power) {

  let output = 1; 
 
  for (let i = 0; i < power; ++i) { 
    output *= num
  } 
  return output;
	
};

const factorial = function(num) {
	
  let output = 1;

  for (let i = 1; i <= num; i++) {
    output *= i;
  }
  return output;
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
