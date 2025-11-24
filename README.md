# React Playwright E2E Tests

This repository contains end-to-end tests written with [Playwright Test](https://playwright.dev/) for the sample application hosted at **https://www.saucedemo.com/**.

The tests use a **Page Object Model (POM)** structure and cover core user flows such as login and product interactions.

---

## Tech Stack

- **Node.js** (LTS, 18+ recommended)
- **Playwright Test** (`@playwright/test`)
- **JavaScript**
- **Allure** reporting 

---

## Project Structure

```text
react-playwright/
├─ config/
│  └─ users.js               # Test data / credentials (e.g. standard_user, password)
│
├─ tests/
│  ├─ e2e/                   # End-to-end test specs
│  │  ├─ login.spec.js       # Login test scenarios
│  │  └─ productsCases.spec.js
│  │                          # Product-related flows (listing, filters, etc.)
│  └─ pom/                   # Page Object Model layer
│     ├─ loginPage.js        # Login page actions & selectors
│     └─ productsPage.js     # Product page actions & selectors
│
├─ test-results/
│  └─ .last-run.json         # Playwright last run metadata
│
├─ .gitignore
├─ package.json
├─ package-lock.json
├─ playwright.config.js      # Global Playwright configuration
└─ README.md

Playwright Configuration

The main configuration lives in playwright.config.js. Key settings:

Base URL: https://www.saucedemo.com/

Viewport: 1280 x 720

Headless: false by default (runs in visible browser)

Ignore HTTPS errors: true

Projects:

chromium

firefox

webkit

There is also a commented Allure reporter line:

reporter: [
  //'list',
  // ['allure-playwright', { outputFolder: 'allure-results' }]
],


Uncomment this and install allure-playwright plus allure-commandline if you want rich HTML reports.

Installation

Clone the repository:

git clone https://github.com/SoftwareQAE-qa/reactplaywright.git
cd reactplaywright


Install dependencies:

npm install


Install Playwright browsers (if not already):

npx playwright install

Configuration: Users & Test Data

User credentials are stored in config/users.js.
Update this file if you want to use different test users or environments.

Example shape (for reference):

module.exports = {
  standardUser: {
    username: 'standard_user',
    password: 'secret_sauce',
  },
};


⚠ Do not commit real production credentials.

NPM Scripts

Common test commands (see package.json suggestion below):

Run all tests (default)
npm test

Headed mode (visible browser)
npm run test:headed

UI Mode (Playwright Test Runner)
npm run test:ui

Run tests in one browser only

Chromium: npm run test:chromium

Firefox: npm run test:firefox

WebKit: npm run test:webkit

Run a specific spec

Login tests: npm run test:login

Product tests: npm run test:products

Debug mode
npm run test:debug

If you enable Allure:

Generate report: npm run allure:generate

Open report: npm run allure:open