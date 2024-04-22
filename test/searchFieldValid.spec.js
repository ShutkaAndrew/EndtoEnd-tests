import {test, expect} from '@playwright/test';
 
test.describe('Search field functionality', () =>{
    test.beforeEach('Open the main page', async({page})=>{
         await page.goto('https://magento.softwaretestingboard.com/')

test('Navigation after selecting Item from drop-down list with valid input'), async({page})=>{
    await page.locator('#search').fill('shorts')
    await page.waitForSelector('#search_autocomplete')
    await page.locator('#qs-option-0').click()
    }



    })
})