const sumAll = function(firstNum, secondNum) {
    //Checking for incorrect input
    if(!(typeof(secondNum) === "number")||!(typeof(secondNum) === "number")||firstNum<0||secondNum<0) return "ERROR";
    //Switching numbers to make sure it works with biggest number first. 
    if(firstNum > secondNum){
        let first = firstNum;
        let second = secondNum;
        firstNum = second;
        secondNum = first;
    };
    //Taking the sum by using a for loop
    let sum = 0;
    for(let i = firstNum;i <= secondNum;i++) {
        sum += i;
    };
    return sum;
};
// Do not edit below this line
module.exports = sumAll;
