const reverseString = function(string) {
    let stringArray = [];
    let stringLength = string.length;
    for(let i = 0;i<stringLength;i++){
        stringArray[i] = string[i];
    }
    let newString = "";
    for(let i = stringLength-1;i>=0;i--){
        newString = newString.concat(stringArray[i]);
    }
    return newString;
};

reverseString("test");
// Do not edit below this line
module.exports = reverseString;
