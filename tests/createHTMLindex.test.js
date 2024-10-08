import { expect, test } from '@playwright/test';
import { Backpack } from '../../src/backpack.js';

// Create Everyday Backpack object for testing days old
const everydayPack = new Backpack('pack01', 'Everyday Backpack', 30, 'grey', 15, 'December 5, 2018 15:00:00 PST');
// Create Frog Backpack object for testing days old
const frogPack = new Backpack('pack02', 'Frog Backpack', 8, 'green', 3, 'October 16, 2019 15:00:00 PST');

// For all tests, we will use the same page.
test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('There should be two articles', async ({ page }) => {
  // see https://playwright.dev/docs/locators#locate-by-css-or-xpath
  await expect(await page.locator('article').filter({ hasText: 'Everyday Backpack' })).toBeVisible();
  await expect(await page.locator('article').filter({ hasText: 'Frog Backpack' })).toBeVisible();
});

test('Articles are displaying number of days old using backpackAge function', async ({ page }) => {
  // see https://playwright.dev/docs/locators#locate-by-css-or-xpath
  await expect(
    await page.locator('article').filter({ hasText: `${everydayPack.backpackAge()} days old` })
  ).toBeVisible();
  await expect(await page.locator('article').filter({ hasText: `${frogPack.backpackAge()} days old` })).toBeVisible();
});
