import { test, expect } from 'playwright-test-coverage';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle('Rsbuild App');
  await page.locator("input").fill('xyz')
  await page.waitForTimeout(1000);
});
