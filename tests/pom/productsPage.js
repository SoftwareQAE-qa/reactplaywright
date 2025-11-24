export class ProductsPage {
    constructor(page) {
        this.page = page;

        this.card = '[data-test="inventory-item"]';
        this.itemImage = '[data-test="item-4-img-link"] img';
        this.itemTitle = '[data-test="item-4-title-link"]';
        this.itemName = '[data-test="inventory-item-name"]';
        this.itemDesc = '[data-test="inventory-item-desc"]';
        this.itemPrice = '[data-test="inventory-item-price"]';
        this.addToCartBackpackBtn = '[data-test="add-to-cart-sauce-labs-backpack"]';
        this.cartIcon = '[data-test="shopping-cart-link"]';
        this.cartItem = '[data-test="inventory-item"]';
        this.checkoutBtn = '[data-test="checkout"]';
        this.firstName = '[data-test="firstName"]';
        this.lastName = '[data-test="lastName"]';
        this.postalCode = '[data-test="postalCode"]';
        this.continueButton = '[data-test="continue"]';
        this.finishButton = '#finish';
        this.completeHeader = '[data-test="complete-header"]';

    }

    async verifyCardVisible() {
        await this.page.waitForSelector(this.card, { state: 'visible' });
        await this.page.waitForSelector(this.itemImage, { state: 'visible' });
        await this.page.waitForSelector(this.itemTitle, { state: 'visible' });
        await this.page.waitForSelector(this.itemName, { state: 'visible' });
        await this.page.waitForSelector(this.itemDesc, { state: 'visible' });
        await this.page.waitForSelector(this.itemPrice, { state: 'visible' });
        await this.page.waitForSelector(this.addToCartBackpackBtn, { state: 'visible' });
    }

    async clickAddToCartBackpack() {
        await this.page.click(this.addToCartBackpackBtn);
    }

    async clickCartIcon() {
        await this.page.click(this.cartIcon);
        await this.page.locator(this.cartItem).isVisible();
    }


    async clickCheckout() {
        await this.page.click(this.checkoutBtn);

    }

    async fillCheckoutInfo(first, last, postal) {
        await this.page.fill(this.firstName, first);
        await this.page.fill(this.lastName, last);
        await this.page.fill(this.postalCode, postal);
        await this.page.click(this.continueButton);
        await this.page.click(this.finishButton);

    }

    async verifyCompleteText(expectedText) {
        await this.page.waitForSelector(this.completeHeader, { state: 'visible' });
        const text = await this.page.textContent(this.completeHeader);
        if (text.trim() !== expectedText) {
            throw new Error(`Expected "${expectedText}", but got "${text.trim()}"`);
        }
    }
}


module.exports = ProductsPage;
