import { test, expect } from '../fixture/basefixture';
import loginData from '../test-data/loginData.json';

test.describe('Login Tests', () => {

    test.beforeEach(async ({ homePage }) => {
        await homePage.navigate();
    });

    test('Login with valid credentials', async ({ loginPage }) => {
        await loginPage.loginAction(
            loginData.validUser.email,
            loginData.validUser.password
        );
        await expect(loginPage.success).toContainText('My Account');

    });

    test('Login with invalid email', async ({ loginPage }) => {
        await loginPage.loginAction(
            loginData.invalidEmail.email,
            loginData.invalidEmail.password
        );

        await expect(loginPage.wrongemail)
            .toContainText('Warning: No match for E-Mail Address and/or Password.');

    });

    test('Login with wrong password', async ({ loginPage }) => {
        await loginPage.loginAction(
            loginData.wrongPassword.email,
            loginData.wrongPassword.password
        );

        await expect(loginPage.wrongemail)
            .toContainText('Warning: No match for E-Mail Address and/or Password.');
    });

});