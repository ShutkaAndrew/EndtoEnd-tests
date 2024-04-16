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
})