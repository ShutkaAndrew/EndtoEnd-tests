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
     test('dropdown displays', async({page}) =>{
await page.goto('https://openweathermap.org/')
const searchField =  page.getByPlaceholder('Search city')
searchField.fill('Washington')
await page.locator('button[type="submit"]').click()
await expect(page.locator('ul.search-dropdown-menu')).toBeVisible()
await page.getByText('Washington, US ').click()
await expect(page.getByRole('heading', {name:'Washington, US'})).toBeVisible()


     })
})