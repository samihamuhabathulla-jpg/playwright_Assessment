import { test, expect } from '../fixture/basefixture';

test.describe('Home Page Tests', () => {

    test.beforeEach(async ({ homePage }) => {
        await homePage.navigate();
    });

    test('Verify Home Page', async ({ page }) => {
        await expect(page).toHaveTitle(/Your Store/);

    });

});