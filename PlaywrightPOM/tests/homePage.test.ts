import { test, expect } from '../fixture/basefixture';

test.describe('Home Page Tests', () => {

    test.beforeEach(async ({ homePage }) => {
        await homePage.navigate();
    });

    test('Verify Home Page', async ({ page }) => {
        await expect(page).toHaveTitle(/Your Store/);

    });

    test('Search Product', async ({ homePage, page }) => {
        await homePage.searchProduct("MacBook");
        await expect(page).toHaveURL(/search/);
        await expect(page.locator(".product-thumb").first()).toContainText("MacBook");

    });

});