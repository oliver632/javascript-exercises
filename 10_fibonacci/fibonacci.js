const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    fiboArray = [1,1];
    console.log(fiboArray);
    for (let i = num;i>0;i--) {
        console.log(fiboArray);
        numForFibo = parseInt(fiboArray[fiboArray.length-1])+parseInt(fiboArray[fiboArray.length-2]);
        fiboArray = fiboArray.concat(numForFibo);
    }
    return fiboArray[num-1];
};
console.log(fibonacci(4));
// Do not edit below this line
module.exports = fibonacci;
