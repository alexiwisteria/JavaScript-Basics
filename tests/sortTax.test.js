import { expect, test } from 'vitest';
import { processArray } from '../src/sort-items.js';

const deskArray = ['pen', 'camera', 'phone', 'notebook', 'headphones', 'laptop', 'light bulb', 'USB drive', 'elephant'];

const sortedArray = processArray(deskArray);

test('elephant (last element) should be removed', () => {
  expect(sortedArray.includes('elephant')).toBe(false);
});
test('should be sorted alphabetically', () => {
  expect(sortedArray[1]).toBe('camera');
});
test('USB drive should be last', () => {
  expect(sortedArray[sortedArray.length - 1]).toBe('USB drive');
});

test('Last Item should be first', () => {
  expect(sortedArray[0]).toBe('phone');
});

test('laptop should be removed', () => {
  expect(sortedArray.includes('laptop')).toBe(false);
});
