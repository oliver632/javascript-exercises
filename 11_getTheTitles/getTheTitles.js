const getTheTitles = function(books) {
    let bookArray = new Array();
    for(book in books){
        bookArray = bookArray.concat((books[book].title));
      }
      return bookArray;
};
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
console.log(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;
