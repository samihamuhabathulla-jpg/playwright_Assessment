import { test, expect } from '@playwright/test';

test('Firefox Bing Test', async ({ page }) => {
    await page.goto("https://www.bing.com/");

    let title = await page.title();
    console.log(title);

    let url = page.url();
    console.log(url);

    await expect(page).toHaveTitle(/Bing/);
    await expect(page).toHaveURL("https://www.bing.com/");

    let text = await page.locator("#id_sc").innerText();
    console.log(text);

    let attribute = await page.locator("#sb_form_q").getAttribute("name");
    console.log(attribute);

    await page.locator("#sb_form_q").fill("playwright");
    await page.locator("#sb_form_q").press("Enter");
    await page.locator("h2 a").first().click();
    await expect(page).toHaveTitle(/Playwright/);

});