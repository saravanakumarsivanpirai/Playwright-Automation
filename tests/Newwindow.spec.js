

import {test} from '@playwright/test';
  
test('Login page', async({browser})=>{
   
const context = await browser.newContext();
const page = await context.newPage();
      
await page.goto('https://the-internet.herokuapp.com/windows')
const newPromise = context.waitForEvent('page');
await page.locator("a:has-text('click here')").click();
const newpage = await newPromise;
await newpage.waitForLoadState();
const text = await newpage.locator('h3').textContent();
console.log(text);


})








