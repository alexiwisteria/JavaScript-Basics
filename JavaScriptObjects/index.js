import { Book } from './Book.js';

const bookTitle = "Alice's Adventures in Wonderland";
const bookAuthor = 'Lewis Carroll';
const bookPubYear = 1865;
const bookISBN = 9798369203415;

// create book
const book = new Book(bookTitle, bookAuthor, bookISBN, bookPubYear);

// print book
console.log('Here is your book \n', JSON.stringify(book, null, 2));
window.book = book;
