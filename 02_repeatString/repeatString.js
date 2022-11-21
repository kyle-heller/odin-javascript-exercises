const repeatString = function(string, num) {
    let i = 0
    message = ""
    if (num < 0) {
        return "ERROR"
    }
    while (i < Number(num)) {
        message += string
        i++
    }
    return message
};

// Do not edit below this line
module.exports = repeatString;
