const repeatString = function(string, num) {
    let output = "";
    if(num < 0){
        return "ERROR";
    }
    for(let i = num; i>0;i--){
        output += string;
    };
    return output;
};

// Do not edit below this line
module.exports = repeatString;
