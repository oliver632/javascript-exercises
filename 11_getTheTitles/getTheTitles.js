const getTheTitles = function(books) {
    let bookArray = new Array();
    for(book in books){
        bookArray = bookArray.concat((books[book].title));
      }
      return bookArray;
};

// Do not edit below this line
module.exports = getTheTitles;
