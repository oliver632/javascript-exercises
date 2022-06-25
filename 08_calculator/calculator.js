const add = function(num1,num2) {
    //Returning the added numbers using "+";
    return num1 + num2;
};

const subtract = function(num1,num2) {
    //return the subtracted numbers using "-";
    return num1 - num2;
};

const sum = function(numbers) {
    return numbers.reduce((total, number) => total + number,0);
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
    //returns power by using **
    return num1**num2;
};

const factorial = function(num) {
    //starting by making the sum = num, to get a stand-point for following multiplication.
    let sum = num;
    for(let i = num-1;i > 0; i--){
        sum *= i;
    };
    //returns sum, if num is not 0, then it returns 1. 
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
