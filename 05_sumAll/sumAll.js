const sumAll = function(a, b) {
// debugger;
   let sum = 0
    if ((a < 0) || (b < 0)) { 
        let iserror = "ERROR"
        return iserror
    }
    else if ((typeof a !== 'number') || (typeof b !== 'number')) {
        let iserror = "ERROR"
        return iserror
    }
    else if (Number(a) < Number(b)) {
        for (let i = Number(a); i <= Number(b); i++) {
            sum = sum + i
        }
    
    }
    else if (Number(a) > Number(b)) {
        for (let i = Number(b); i <= Number(a); i++) {
            sum = sum + i
        }
    }
    return sum;
};

// console.log(sumAll(1, "90"))

// Do not edit below this line
module.exports = sumAll;
