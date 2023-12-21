const reverseString = function(word) {
    let myArray = word.split("");
    let newArray = [];
    let len = word.length;
    for (i = 0; i < len; i++) {
        newArray.unshift(myArray[i]);
    }
    let newword = newArray.join("");
    return newword;
};

// Do not edit below this line
module.exports = reverseString;
