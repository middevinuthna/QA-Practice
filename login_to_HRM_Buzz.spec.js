import { test, expect } from '@playwright/test';
import logindata from '../test_data/logindata_Buzz.json';
const baseURL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

// 🔧 Common login function
test('Valid login and verify dashboard', async ({ page }) => 
 {
  await page.goto(baseURL);
  await page.locator("input[name='username']").fill("Admin");
  await page.locator("input[type='password']").fill("admin123");
  await page.locator("button[type='submit']").click();
  await page.locator("//span[text()='Buzz']").click();
  await page.locator("textarea.oxd-buzz-post-input").fill("Hi, Good Afternoon")
  await page.locator('//button[@type="submit"]').click()
   // await expect(page.locator("//p[text()='Hi, Good Afternoon']")).toBeVisible();
  await page.locator("//button[normalize-space(text())='Share Photos']").click();  
   const filePath = 'test_data/waii2.jpg';
   await page.locator('//input[@type="file"]').setInputFiles(filePath)

  await page.locator("(//button[@type='submit'])[2]").click()
  
   await expect(page.locator("(//div[@class='orangehrm-buzz-post-body-picture'])[1]")).toBeVisible();

   await page.reload()
 });