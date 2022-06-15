const caesar = function(string,shift) {
    newString = string;
    stringArray = [];
    for (let i = string.length-1; i >= 0; i--) {
        stringArray.unshift(shiftCode(string[i],shift));
    }
    return stringArray.join("");
};
//Store bogstaver kører fra UniCode 65 til 90
//Små bogstaver kører fra UniCode 97 til 122

function shiftCode(singleChar,shift) {
    let uniCodeChar = singleChar.charCodeAt(0);
    if((uniCodeChar >= 65 && uniCodeChar <=90)||(uniCodeChar >=97 && uniCodeChar <= 122)){
        if (shift > 0) {
        //if shift is positive
        for (let i = shift;i > 0; i--) {
            uniCodeChar += 1;
            if (uniCodeChar === 91) {
                uniCodeChar = 65;
            }
            if (uniCodeChar === 123) {
                uniCodeChar = 97;
            }
        }     
        } else if (shift < 0) {
        //if shift is negative
            for (let i = shift;i < 0; i++) {
                uniCodeChar -= 1;
                if (uniCodeChar === 64) {
                    uniCodeChar = 90;
                }
                if (uniCodeChar === 96) {
                    uniCodeChar = 122;
                }
            }
        }
    }
    return String.fromCharCode(uniCodeChar);
}

console.log(caesar("abc",-1));
// Do not edit below this line
module.exports = caesar;
