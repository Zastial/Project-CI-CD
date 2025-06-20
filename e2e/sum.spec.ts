import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Sum Example/);
});

test('sum works', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Get the input fields and button
  const input1 = page.locator('#num1');
  const input2 = page.locator('#num2');
  const button = page.locator('#calculate');
  const result = page.locator('#result');

  // Input values
  await input1.fill('5');
  await input2.fill('10');

  // Click the button
  await button.click();

  // Check the result
  await expect(result).toHaveText('Sum: 15');
});