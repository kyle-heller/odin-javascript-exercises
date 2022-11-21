let removeFromArray = function(input, ...args) {
    
    for (let i = 0; i < args.length; i++) {

    let index = input.indexOf(args[i]);
    if (index >= 0) {
     parsed = input.splice(index,1)

    }
    }
    return input
}

// Do not edit below this line
module.exports = removeFromArray;
