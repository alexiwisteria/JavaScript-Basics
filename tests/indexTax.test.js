import { expect, test } from '@playwright/test';

// For all tests, we will use the same page
test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Heading is visible', async ({ page }) => {
  // see https://playwright.dev/docs/locators#locate-by-css-or-xpath
  await expect(await page.locator('h1')).toBeVisible();
});

test('Heading is red by default', async ({ page }) => {
  // see https://playwright.dev/docs/locators#locate-by-css-or-xpath
  const h1Locator = await page.locator('h1');

  // Test a CSS property
  const { defaultColor } = await h1Locator.evaluate((el) => {
    const defaultColor = window.getComputedStyle(el).getPropertyValue('color');
    return {
      defaultColor,
    };
  });

  // Test default color
  await expect(defaultColor).toBe('rgb(255, 0, 0)');
});

test('Heading is blue when hovering', async ({ page }) => {
  // Getting locator by css/xpath
  // see https://playwright.dev/docs/locators#locate-by-css-or-xpath
  const h1Locator = await page.locator('h1');

  // Hover over the heading
  await h1Locator.hover();

  // Test a CSS property
  const { hoverColor } = await h1Locator.evaluate((el) => {
    const hoverColor = window.getComputedStyle(el).getPropertyValue('color');
    return {
      hoverColor,
    };
  });

  await expect(hoverColor).toBe('rgb(0, 0, 255)');
});

test('Image is visible', async ({ page }) => {
  // Getting locator by role
  // see https://playwright.dev/docs/locators#locate-by-role
  await expect(page.getByRole('img', { name: 'icon' })).toBeVisible();
});

test('Increment 1 when clicking button', async ({ page }) => {
  const button = await page.locator('button');
  // click the button twice
  await button.click();
  await button.click();
  // test the button text
  await expect(await button.innerText()).toBe('count is 2');
});
