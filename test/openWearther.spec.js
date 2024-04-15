import { test, expect} from '@playwright/test'

test.describe('functional changes', () =>{
test('open the web-site', async({page}) => {
    await page.goto('https://openweathermap.org/');

    const takePartButton = await page.waitForSelector('.challenge-btn')
    takePartButton.click()

    const ChallengePromise = page.waitForEvent('popup')
    const openChallenge = await ChallengePromise

    await openChallenge.getByText('Take part').first().click()
    expect(openChallenge).toHaveURL('https://challenge.openweather.co.uk/#take-part')

    


})
})