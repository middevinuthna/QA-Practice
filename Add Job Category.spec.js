import { test, expect } from '@playwright/test';

const baseURL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

test('Login and navigate to Job category, then click Add', async ({ page }) => {
  // Step 1: Login
  await page.goto(baseURL);
  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.locator('button[type="submit"]').click();

  // Wait for dashboard to load
  await expect(page).toHaveURL(/dashboard/);

  // Step 2: Click on Admin in sidebar
  await page.locator("//span[text()='Admin']").click();

  // Wait until Admin page is visible
  await expect(page).toHaveURL(/admin/);

  // Step 3: Click on Job dropdown and select "Job category"
  await page.locator("//span[normalize-space(text())='Job']").click(); // Opens Job dropdown
  await page.locator("(//a[@role='menuitem'])[4]").click();

  // Verify that we are on the Job category page
  await expect(page).toHaveURL(/jobCategory/);
  await page.locator("//button[contains(.,'Add')]").click();
   await expect(page).toHaveURL(/saveJobCategory/);
  await page. locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("Rani");
   await page. locator("//button[@type='submit']").click();
   await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/jobCategory");
});