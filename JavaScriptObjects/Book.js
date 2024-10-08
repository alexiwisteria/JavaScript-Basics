export class Book {
  constructor(title, author, publicationYear, ISBN) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.ISBN = ISBN;
  }

  print() {
    console.log(`Title:${this.title} Author:${this.author} ISBN:${this.ISBN} Publication Year:${this.publicationYear}`);
  }
}

const bookTitle = "Alice's Adventures in Wonderland";
const bookAuthor = 'Lewis Carroll';
const bookPubYear = 1865;
const bookISBN = 9798369203415;

const book = new Book(bookTitle, bookAuthor, bookPubYear, bookISBN);
book.print();
