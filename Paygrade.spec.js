import { test, expect } from '@playwright/test';
test('Verify Add Pay grades', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByText('Job').click();
  await page.getByRole('menuitem', { name: 'Pay Grades' }).click();
  await page.getByRole('button', { name: ' Add' }).click();

  await page.locator('form').getByRole('textbox').fill('ABC');
  await page.getByRole('button', { name: 'Save' }).click();
  
  await expect(page.getByRole('heading', { name: 'Edit Pay Grade' })).toBeVisible();

});
