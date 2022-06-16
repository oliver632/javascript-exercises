const ftoc = function(temp) {
  //returning the converted temp and rounding to nearest decimal place by using Math.round
    return Math.round((((temp-32)*(5/9))) * 10) / 10
};

const ctof = function(temp) {
  //returning the converted temp and rounding to nearest decimal place by using Math.round
    return Math.round((temp*(9/5)+32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
