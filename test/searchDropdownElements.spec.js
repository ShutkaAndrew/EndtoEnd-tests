import {test,expect} from '@playwright/test';

test.describe('Search field', () => {
test('Valid value', async({page})=> {
    await page.goto('https://openweathermap.org/');
    const searchField =  page.getByPlaceholder('Search city');
    await searchField.fill('New York')
     const buttonSearch = page.getByRole('button', {name: 'Search'})
     buttonSearch.click()
    await   page.getByText('New York City, US ').click()
        
    await  expect(page.getByRole('heading', {name:'New York City, US'})).toBeVisible()
    




     })
     test('dropdown Elements', async({page}) =>{
await page.goto('https://openweathermap.org/')
const searchField =  page.getByPlaceholder('Search city')
searchField.fill('Washington')
await page.locator('button[type="submit"]').click()
const list  = await page.waitForSelector('ul.search-dropdown-menu')
const listCountry = page.locator('ul.search-dropdown-menu')
await expect(listCountry).toBeVisible();

    const countryTry =  [
     "Washington, US 3°C47.500, -120.501Washington, D.C., US 16°C38.895, -77.036Washington County, US 6°C45.514, -123.003Washington County, US 9°C45.033, -92.917Washington County, US 20°C35.967, -94.234"
 ].join(', ');
await expect(page.locator('ul.search-dropdown-menu')).toHaveText(countryTry)
await page.pause(2000);
await page.getByText('Washington, US ').click()
await expect(page.getByRole('heading', {name:'Washington, US'})).toBeVisible()


     })
})