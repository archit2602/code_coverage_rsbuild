# Test info

- Name: test
- Location: /Users/videoverse/Desktop/react/test/test.spec.ts:2:238

# Error details

```
Error: browserType.launch: Executable doesn't exist at /Users/videoverse/Library/Caches/ms-playwright/chromium_headless_shell-1169/chrome-mac/headless_shell
╔═════════════════════════════════════════════════════════════════════════╗
║ Looks like Playwright Test or Playwright was just installed or updated. ║
║ Please run the following command to download new browsers:              ║
║                                                                         ║
║     yarn playwright install                                             ║
║                                                                         ║
║ <3 Playwright Team                                                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```

# Test source

```ts
  1 | import { test, expect } from 'playwright-test-coverage';
> 2 |
    | ^ Error: browserType.launch: Executable doesn't exist at /Users/videoverse/Library/Caches/ms-playwright/chromium_headless_shell-1169/chrome-mac/headless_shell
  3 | test('test', async ({ page }) => {
  4 |   await page.goto('http://localhost:3000');
  5 |   await expect(page).toHaveTitle('Rsbuild App');
  6 |   await page.locator("input").fill('xyz')
  7 |   await page.waitForTimeout(1000);
  8 | });
  9 |
```