// import {test, expect} from '@playwright/test';
 
// test.describe('Search field functionality', () =>{
//     test.beforeEach('Open the main page', async({page})=>{
//          await page.goto('https://magento.softwaretestingboard.com/')

// test('Navigation after selecting Item from drop-down list with valid input'), async({page})=>{
//     const searchField = await page.locator('#search')
//     searchField.fill('shorts')
//     await expect(page.waitForSelector('#search_autocomplete')).toBeVisible()
//     await page.locator('#qs-option-0').click()
//     const urlItm_1 = 'https://magento.softwaretestingboard.com/catalogsearch/result/?q=shorts'
//     expect(page.url()).toEqual(urlItm_1)
//     }



//     })
// })
import { test, expect } from '@playwright/test';

test.describe('Search field functionality', () => {
    test('Navigation after selecting Item from drop-down list with valid input', async ({ page }) => {
        await page.goto('https://magento.softwaretestingboard.com/');
        const searchField = await page.locator('#search');
        await searchField.fill('shorts');
        expect(page.waitForSelector('#search_autocomplete'))
        await page.locator('#qs-option-0').click();
        const urlItm_1 = 'https://magento.softwaretestingboard.com/catalogsearch/result/?q=shorts';
        expect(page.url()).toEqual(urlItm_1);
    });
});