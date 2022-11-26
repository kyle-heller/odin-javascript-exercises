const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
  
const getTheTitles = function(bookArray) {
    let titleArray = []
    for (let i = 0; i < bookArray.length; i++) {
        let itemArray = bookArray[i]
        let test = itemArray.title;
        titleArray.push(test)
    }
    console.log(titleArray)
    return titleArray;
};


// Do not edit below this line
module.exports = getTheTitles;
