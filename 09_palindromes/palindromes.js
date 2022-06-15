const palindromes = function (word) {
    word = word.replaceAll(".", "").toLowerCase();
    word = word.replaceAll(" ", "");
    word = word.replaceAll("!", "");
    word = word.replaceAll(",", "");
    let reversedWord = word.split("").reverse().join("");
    if(word === reversedWord){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
