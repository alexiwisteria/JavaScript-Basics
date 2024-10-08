// *****************************************************************************
// DO NOT MODIFY THIS FILE !!!
// *****************************************************************************
import { beforeEach, expect, test } from 'vitest';
import { faker } from '@faker-js/faker';
import { Book } from '../src/Book';

let book;

beforeEach(() => {
  const bookTitle = faker.lorem.sentence({ min: 2, max: 5 });
  const bookAuthor = faker.person.fullName();
  const ISBN = faker.number.bigInt({ min: 1000000000000, max: 9999999999999 });
  const publicationYear = faker.number.bigInt({ min: 1800, max: 2024 });

  // create book
  book = new Book(bookTitle, bookAuthor, ISBN, publicationYear);
});

test('Book should have a title', () => {
  expect(book.title).toBeDefined();
});

test('Book should have an author', () => {
  expect(book.author).toBeDefined();
});

test('Book should have an ISBN', () => {
  expect(book.ISBN).toBeDefined();
});

test('Book should have a publication year', () => {
  expect(book.publicationYear).toBeDefined();
});

test('Book should have a print method', () => {
  expect(book.print).toBeDefined();
});
