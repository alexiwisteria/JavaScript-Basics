import { expect, test } from 'vitest';
import { calculateTotal } from '../src/tax-calculation.js';

const prices = [8.5, 9.5, 10, 11.5, 12, 50];
let totalBeforeTax = 0;
prices.forEach((price) => (totalBeforeTax += price));

const { beforeTax, GST, PST, sum } = calculateTotal(prices);

test('Before tax should work', () => {
  expect(beforeTax.toFixed(2)).toBeCloseTo(totalBeforeTax.toFixed(2), 1); // accurate to .1 precision
});

test('GST should work', () => {
  expect(GST.toFixed(2)).toBeCloseTo((0.05 * totalBeforeTax).toFixed(2), 1); // accurate to .1 precision
});

test('PST should work', () => {
  expect(PST.toFixed(2)).toBeCloseTo((0.08 * totalBeforeTax).toFixed(2), 1); // accurate to .1 precision
});

test('Sum should work', () => {
  expect(sum.toFixed(2)).toBeCloseTo((0.05 * totalBeforeTax + 0.08 * totalBeforeTax + totalBeforeTax).toFixed(2), 1); // accurate to .1 precision
});
