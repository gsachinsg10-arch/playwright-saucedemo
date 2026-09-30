const { test, expect } = require('@playwright/test');

test ('test case 1 ', async ({ page }) => {

// Navigate to application
await page.goto('https://www.saucedemo.com/');

// Login
await page.locator('[data-test="username"]').fill('standard_user');
await page.locator('[data-test="password"]').fill('secret_sauce');
await page.locator('[data-test="login-button"]').click();

// Verify login successful
await expect(page).toHaveURL(/inventory/);

// Add products to cart
await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

// Verify cart badge
await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
// Open cart
await page.locator('.shopping_cart_link').click();
// Verify products in cart
await expect(page.locator('.cart_item')).toHaveCount(2);
// Checkout
await page.locator('[data-test="checkout"]').click();
// Customer Information
await page.locator('[data-test="firstName"]').fill('Sachin');
await page.locator('[data-test="lastName"]').fill('Tester');
await page.locator('[data-test="postalCode"]').fill('560001');

await page.locator('[data-test="continue"]').click(); 
// Verify checkout overview page
await expect(page.locator('.title')).toHaveText('Checkout: Overview');
// Finish Order
await page.locator('[data-test="finish"]').click();
// Verify Success Message
await expect(
page.locator('[data-test="complete-header"]')
).toHaveText('Thank you for your order!');
// Verify Order Completion URL
await expect(page).toHaveURL(/checkout-complete/);
});goi