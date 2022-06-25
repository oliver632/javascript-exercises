const getTheTitles = function(books) {
  //making array for for...in loop
    let bookArray = books.map(book => book.title);
    //for each book in books, add it to the above array. 
    //an alternative could be using the .map() method.
    return bookArray;
};

// Do not edit below this line
module.exports = getTheTitles;
