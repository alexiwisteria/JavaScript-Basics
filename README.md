[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=14061739)
# Code Challenge 01: JavaScript Objects

## Getting Started

Run `src/index.js` file:

```bash
npm install
npm run dev
```

## Running Tests

```bash
npm test
```

## Linting & Formatting the Code

```bash
npm run lint
npm run format
```

# Make an object constructor for Book objects

You are given a set of variables containing different data about a book:

```js
const bookTitle = "Alice's Adventures in Wonderland";
const bookAuthor = 'Lewis Carroll';
const bookPubYear = 1865;
const bookISBN = 9798369203415;
```

## Your task

- Edit the file `src/Book.js`.
- Make an object constructor for `Book` objects.
- The constructor must have properties for `title`, `author`, `ISBN`, and `publicationYear`.
- Add a method called `print` to the `Book` class.
- The method `print` should return a string with the following format:

```text
Title: Alice's Adventures in Wonderland
Author: Lewis Carroll
ISBN: 9798369203415
Publication Year: 1865
```

When used, the constructor produces an object from the following input:

```js
const book = new Book(bookTitle, bookAuthor, bookISBN, bookPubYear);
book.print();
```

This should output:

```text
Title: Alice's Adventures in Wonderland
Author: Lewis Carroll
ISBN: 9798369203415
Publication Year: 1865
```
