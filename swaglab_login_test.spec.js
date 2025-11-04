import { test, expect } from '@playwright/test';
import logindata from '../test_data/logindata.json';

test(' Valid login - standard_user', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/index.html")
    await page.locator("input[data-test='username']").fill('standard_user')
    await page.locator("input[data-test='password']").fill('secret_sauce')
    await page.locator("input[type='submit']").click()
    await expect(page.locator('#inventory_container').nth(1)).toBeVisible();
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html')
});
test(' Valid login - locked_out_user', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/index.html")
    await page.locator("input[data-test='username']").fill('locked_out_user')
    await page.locator("input[data-test='password']").fill('secret_sauce')
    await page.locator("input[type='submit']").click()
    await expect(page.locator("//h3[@data-test='error']")).toBeVisible()
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/index.html')
});
test(' Valid login - problem_user', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/index.html")
    await page.locator("input[data-test='username']").fill('problem_user')
    await page.locator("input[data-test='password']").fill('secret_sauce')
    await page.locator("input[type='submit']").click()
    await expect(page.locator('#inventory_container').nth(1)).toBeVisible();
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html')
});
test(' Valid login - performance_glitch_user', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/index.html")
    await page.locator("input[data-test='username']").fill('performance_glitch_user')
    await page.locator("input[data-test='password']").fill('secret_sauce')
    await page.locator("input[type='submit']").click()
    await expect(page.locator('#inventory_container').nth(1)).toBeVisible();
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html')
});
test(' invalid_username - wrong_user', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/index.html")
    await page.locator("input[data-test='username']").fill('wrong_user')
    await page.locator("input[data-test='password']").fill('secret_sauce')
    await page.locator("input[type='submit']").click()
    await expect(page.locator("h3[data-test='error']")).toBeVisible();
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/index.html')
});
test(' invalid_password - wrong_password', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/index.html")
    await page.locator("input[data-test='username']").fill('standard_user')
    await page.locator("input[data-test='password']").fill('wrong_password')
    await page.locator("input[type='submit']").click()
    await expect(page.locator("h3[data-test='error']")).toBeVisible();
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/index.html')
});
test(' empty_username -  ', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/index.html")
    await page.locator("input[data-test='username']").fill(' ')
    await page.locator("input[data-test='password']").fill('wrong_password')
    await page.locator("input[type='submit']").click()
    await expect(page.locator("h3[data-test='error']")).toBeVisible();
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/index.html')
});
test(' empty_password -  ', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/index.html")
    await page.locator("input[data-test='username']").fill(' standard_user')
    await page.locator("input[data-test='password']").fill(' ')
    await page.locator("input[type='submit']").click()
    await expect(page.locator("h3[data-test='error']")).toBeVisible();
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/index.html')
});

