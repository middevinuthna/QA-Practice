import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).fill('M. Vinuthna');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('middevinuthna@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Gajulamandayam, Tirupati, Ap, India');
  await page.locator('#permanentAddress').fill('Gajulamandayam, Tirupati, Ap, India');
  await expect(page.getByRole('textbox', { name: 'Current Address' })).toBeVisible();
  await expect(page.locator('#permanentAddress-wrapper #permanentAddress')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Full Name' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'name@example.com' })).toBeVisible();
});