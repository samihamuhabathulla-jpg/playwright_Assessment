import { Page, Locator } from "@playwright/test";

export class HomePage{
    readonly page:Page;

    readonly myAccount:Locator;
    readonly register:Locator;
    readonly login:Locator;
    readonly searchBox:Locator;
    readonly searchButton:Locator;

    constructor(page:Page){
        this.page=page;

        this.myAccount=page.locator("span:text('My Account')");
        this.register=page.locator("text=Register");
        this.login=page.locator("text=Login");
        this.searchBox=page.locator("input[name='search']");
        this.searchButton=page.locator(".btn.btn-default.btn-lg");
    }

    async navigate(){
        await this.page.goto("https://tutorialsninja.com/demo");
    }

    async openRegister(){
        await this.myAccount.click();
        await this.register.click();
    }

    async openLogin(){
        await this.myAccount.click();
        await this.login.click();

    }

}