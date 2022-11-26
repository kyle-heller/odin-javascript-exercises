
const findTheOldest = function(array) {
    let yearsLived = []
    let currentTime = new Date()
    let year = currentTime.getFullYear()

for (let i = 0; i < array.length; i++) {
        if (array[i].yearOfDeath === undefined) { 
            yearsLived[i] = Number(year) - array[i].yearOfBirth
         }
        else {
             yearsLived[i] = array[i].yearOfDeath - array[i].yearOfBirth
         }
 }
    oldest = Math.max(...yearsLived)
    index = yearsLived.indexOf(Math.max(...yearsLived))
    person = array[index]
    return person;
};

// Do not edit below this line
module.exports = findTheOldest;



// Given an array of objects representing people with a birth 
// and death year, return the oldest person.

// ## Hints
// - You should return the whole person object, but the tests 
// mostly just check to make sure the name is correct.
// - this can be done with a couple of chained array methods, 
// or by using `reduce`.
// - One of the tests checks for people with no death-date.. 
// use JavaScript's Date function to get their age as of today.
