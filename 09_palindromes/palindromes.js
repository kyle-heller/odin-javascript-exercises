const palindromes = function (input) {
    input = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"")
    input = input.toLowerCase()
    array = input.split("")
    popArray = array
    array = array.join("")
    // console.log(array)
    let compArray = []
    for (let i = 0; i < popArray.length + i; i++) {
        compArray += popArray.pop();
    }
    console.log(compArray)
    console.log(array)
    return array === compArray;
};

// Do not edit below this line
module.exports = palindromes;


// //A palindrome is a string that is spelled the 
// same both forwards and backwards, usually without 
// considering punctuation or word breaks:

// ### some palindromes:
// - A car, a man, a maraca.
// - Rats live on no evil star.
// - Lid off a daffodil.
// - Animal loots foliated detail of stool lamina.
// - A nut for a jar of tuna.

// ```javascript
// palindromes('racecar') // true
// palindromes('tacos') // false
// ```
