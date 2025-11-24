import { test, expect } from '@playwright/test';
const users = require('../../config/users.js');
const LoginPage = require('../pom/loginPage.js');


test('login as user', async ({ page, baseURL }) => {
  const loginPage = new LoginPage(page);

  await page.goto(baseURL);
  await loginPage.login(users.user.username, users.user.password);

  await expect(page).toHaveURL(new URL('/inventory.html', baseURL).toString());
});