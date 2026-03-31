import { test, expect } from '@playwright/test';

test('Search on W3Schools', async ({ page }) => {
  await page.goto('https://www.w3schools.com/');

  const searchInput = page.locator('#tnb-google-search-input');
  await searchInput.fill('HTML');
  await searchInput.press('Enter');
});