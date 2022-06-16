const leapYears = function(year) {
    //takes year and checks if it's divisible by 4 or 400, then it's a leap year. 
    //If it's divisible by 100 and not 400, then it's not a leap year.
    if(year % 4 === 0 && (!(year % 100 === 0)||(year % 400 === 0))){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
