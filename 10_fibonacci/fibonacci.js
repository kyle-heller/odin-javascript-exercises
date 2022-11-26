const fibonacci = function(num) {
    console.log(num)
    let fibArray = [1, 1]
    let array = function() {
        for (let i = 1; i < num; i++) {
            fibArray.push(fibArray.slice(-1)[0] + fibArray.slice(-2)[0])
        }
    }
    array()
    console.log(fibArray)
    console.log(fibArray[num])

    if (num <= 0) {
        return "OOPS"
    }
    else {
    return fibArray.slice(-2)[0];
    }
};

// Do not edit below this line
module.exports = fibonacci;


// ```javascript
// fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6) // returns 8
// ```
