import { test as base, expect } from '@playwright/test';

import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';


type Fixtures = {

    homePage: HomePage;
    registerPage: RegisterPage;
    loginPage: LoginPage;
    
};

export const test = base.extend<Fixtures>({

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

});

export { expect };