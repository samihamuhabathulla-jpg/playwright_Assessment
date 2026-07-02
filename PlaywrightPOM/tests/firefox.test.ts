import { test, expect } from '@playwright/test';

test('Bing Search Test', async ({ page }) => {

    await page.goto('https://www.bing.com/');

    console.log(await page.title());
    console.log(page.url());

    await expect(page).toHaveTitle(/Bing/);
    await page.locator('#sb_form_q').fill('playwright');
    await page.locator('#sb_form_q').press('Enter');
    await page.waitForLoadState('networkidle');
    await page.locator('h2 a').first().click();
    await page.waitForLoadState();
    await expect(page).toHaveTitle(/Playwright/);

});