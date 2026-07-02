import { test, expect } from '../fixture/basefixture';
import registerData from '../test-data/registerData.json';

test.describe('Register Tests', () => {
    test.beforeEach(async ({ homePage }) => {
        await homePage.navigate();
        await homePage.openRegister();

    });

    test('Register New User @smoke', async ({ registerPage }) => {
        await registerPage.register(
            registerData.user.firstName,
            registerData.user.lastName,
            registerData.user.telephone,
            registerData.user.password
        );
        await expect(registerPage.successMessage).toHaveText("Your Account Has Been Created!");
    });

});