const getTheTitles = function(books) {
  //making array for for...in loop
    let bookArray = new Array();
    //for each book in books, add it to the above array. 
    //an alternative could be using the .map() method.
    for(book in books){
        bookArray = bookArray.concat((books[book].title));
      }
      return bookArray;
};

// Do not edit below this line
module.exports = getTheTitles;
