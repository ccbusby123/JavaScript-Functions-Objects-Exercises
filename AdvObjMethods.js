let library = [
{
  bookTitle: "JavaScript is Fun!",
  bookAuthor: "Jake the Programmer",
  bookPages: 500
},
{
  bookTitle: "JavaScript Will Change Your Life!",
  bookAuthor: "Script Daddy",
  bookPages: 10
},
{
  bookTitle: "Nothing Else to do With Your Life? Learn Javascript",
  bookAuthor: "Code Al Knight",
  bookPages: 1000
},
]

const addBook = {
bookTitle: "Another Interesting Book About Javascript",
bookAuthor: "Captain Coder",
bookPages: 200
};


library.push(addBook);
console.log(library);

const removeBook = library.pop();
console.log(removeBook);