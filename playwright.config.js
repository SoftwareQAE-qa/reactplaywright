
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    use: {
        headless: false, 
        baseURL: 'https://www.saucedemo.com/',  
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
    },
     reporter: [
    //['list'], // keep default console reporter
  ['allure-playwright', { outputFolder: 'allure-results' }]
  ],
    projects: [
        {
            name: 'chromium',
            use: { browserName: 'chromium' },
        },
        {
            name: 'firefox',
            use: { browserName: 'firefox' },
        },
        {
            name: 'webkit',
            use: { browserName: 'webkit' },
        },
    ],
    users: {
        user: { username: 'standard_user', password: 'secret_sauce' },
    },
    testDir: './tests',
    timeout: 80000,
});

