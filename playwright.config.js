// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  timeout: 30000,

  expect: {
    timeout: 5000,
  },

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    baseURL: 'https://www.saucedemo.com',

    browserName: 'chromium',

    headless: false,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'on-first-retry',

    actionTimeout: 10000,

    navigationTimeout: 30000
  },

  projects: [
    {
      name: 'Chrome',
      use: {
        ...devices['Desktop Chrome']
      }
    },

    {
      name: 'Firefox',
      use: {
        ...devices['Desktop Firefox']
      }
    },

    {
      name: 'Edge',
      use: {
        ...devices['Desktop Edge']
      }
    }
  ]

});