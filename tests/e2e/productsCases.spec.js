import { test, expect } from '@playwright/test';
const users = require('../../config/users.js');
const ProductsPage = require('../pom/productsPage.js');
const LoginPage = require('../pom/loginPage.js');


test.describe('Products Page Tests', () => {

    test.beforeEach(async ({ page, baseURL }) => {
        const loginPage = new LoginPage(page);

        // Login before each test
        await page.goto(baseURL);
        await loginPage.login(users.user.username, users.user.password);

        await expect(page).toHaveURL(new URL('/inventory.html', baseURL).toString());
    });

    test('Checking product Page Card visibility', async ({ page, baseURL }) => {
        const products = new ProductsPage(page);
        await products.verifyCardVisible();
        await page.waitForTimeout(4000);

    });


    test('Add Product to cart', async ({ page }) => {
        const products = new ProductsPage(page);
        await products.clickAddToCartBackpack();

        await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
        await page.waitForTimeout(4000);
    });

    test('Clicking Add to cart button', async ({ page, baseURL }) => {
        const products = new ProductsPage(page);
        await products.clickAddToCartBackpack();
        await products.clickCartIcon();
        await expect(page).toHaveURL(new URL('/cart.html', baseURL).toString());

        await page.waitForTimeout(4000);
    });

    test('Proceeding to checkout and complete shopping', async ({ page, baseURL }) => {
        const products = new ProductsPage(page);
        await products.clickAddToCartBackpack();
        await products.clickCartIcon();
        await expect(page).toHaveURL(new URL('/cart.html', baseURL).toString());
        await products.clickCheckout();

        await expect(page).toHaveURL(new URL('/checkout-step-one.html', baseURL).toString());

        await products.fillCheckoutInfo('John', 'Doe', '12345');
        await products.verifyCompleteText('Thank you for your order!');

        await page.waitForTimeout(4000);
    });
});


















