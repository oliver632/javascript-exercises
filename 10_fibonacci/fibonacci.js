const fibonacci = function(num) {
    //Checking if number is negative or is 0
    if (num < 0) return "OOPS";
    if (num === 0) return 0;
    //making a starting point for later usage in calculations.
    fiboArray = [1,1];
    //continues to add to fiboArray, until it's long enough to get the wanted index of it. 
    for (let i = num;i>0;i--) {
        //calculates next point in array
        numForFibo = parseInt(fiboArray[fiboArray.length-1])+parseInt(fiboArray[fiboArray.length-2]);
        //adds next point in array to the fibonacci array.
        fiboArray = fiboArray.concat(numForFibo);
    }
    //returns the number in the fiboArray, that was requested. Doing -1 because it starts at 0
    return fiboArray[num-1];
};
// Do not edit below this line
module.exports = fibonacci;
