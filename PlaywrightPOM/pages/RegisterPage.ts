import { Page, Locator } from '@playwright/test';

export class RegisterPage {

    readonly page: Page;

    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly telephone: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly agree: Locator;
    readonly continueButton: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {

        this.page = page;

        this.firstName = page.locator("#input-firstname");
        this.lastName = page.locator("#input-lastname");
        this.email = page.locator("#input-email");
        this.telephone = page.locator("#input-telephone");
        this.password = page.locator("#input-password");
        this.confirmPassword = page.locator("#input-confirm");
        this.agree = page.locator("input[name='agree']");
        this.continueButton = page.locator("input[value='Continue']");
        this.successMessage = page.locator("#content h1");
    }

    async register(firstName: string, lastName: string, telephone: string, password: string) {
        const email = `sami${Date.now()}@gmail.com`;
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.email.fill(email);
        await this.telephone.fill(telephone);
        await this.password.fill(password);
        await this.confirmPassword.fill(password);
        await this.agree.check();
        await this.continueButton.click();

    }

}