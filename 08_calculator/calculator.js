const add = function(num1,num2) {
    return num1 + num2;
};

const subtract = function(num1,num2) {
    return num1 - num2;
};

const sum = function(...numbers) {
    let som = 0;
    for(let i = numbers[0].length-1;i>-1;i--){
        som += numbers[0][i];
    };
    return parseInt(som);
};

const multiply = function(...numbers) {
    numbers = numbers[0];
    let sum = numbers[numbers.length-1];
    for(let i = numbers.length-2;i>=0;i--){
        sum *= numbers[i];
    };
    return parseInt(sum);
};

const power = function(num1, num2) {
    return num1**num2;
};

const factorial = function(num) {
  let sum = num;
    for(let i = num-1;i > 0; i--){
        sum *= i;
    };
    return ((num === 0) ? 1 : sum);
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
