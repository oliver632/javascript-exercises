const palindromes = function (word) {
    //removing ".", " ", "!", "," from word.
    word = word.replaceAll(".", "").toLowerCase().replaceAll(" ", "").replaceAll("!", "").replaceAll(",", "");
    //reversing to make a comparison possible.
    let reversedWord = word.split("").reverse().join("");
    //returning true, if the reversed word is equal to the word, because that would be a palindrome
    return (word == reversedWord);
};

// Do not edit below this line
module.exports = palindromes;
