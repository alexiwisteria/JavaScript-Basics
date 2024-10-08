import { expect, test } from '@playwright/test';

// For all tests, we will use the same page
test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Nav is visible', async ({ page }) => {
  // see https://playwright.dev/docs/locators#locate-by-css-or-xpath
  await expect(await page.locator('nav')).toBeVisible();
});

test('Nav has css class', async ({ page }) => {
  // see https://playwright.dev/docs/locators#locate-by-css-or-xpath
  await expect(await page.locator('nav.main-navigation')).toBeVisible();
});

test('UL is visible', async ({ page }) => {
  // see https://playwright.dev/docs/locators#locate-by-css-or-xpath
  await expect(await page.locator('ul')).toBeVisible();
});

test('Home link is visible', async ({ page }) => {
  // see https://playwright.dev/docs/other-locators#css-matching-by-text
  await expect(await page.locator('a:has-text("Home")')).toBeVisible();
});
