import {test} from '@playwright/test'

test('table', async ({browser})=>{

const context= await browser.newContext();
const page= await context.newPage();
await page.goto('https://the-internet.herokuapp.com/dropdown')
await page.locator('select').click();

const dropvalues= await page.locator('option')

for(let i=0; i< await dropvalues.count(); i++){

    const text = await dropvalues.nth(i).textContent();

    console.log('***text***',text);

  if(text=='Option 1'){

    await dropvalues.nth(i).click();
    break;
  }
}


})