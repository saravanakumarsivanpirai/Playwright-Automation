

import {test} from '@playwright/test';
  
test('Login page', async({browser})=>{
   
const context = await browser.newContext();
const page = await context.newPage();
      
await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

await page.locator("button:has-text('Click for JS Alert')").click();

page.on('dialog', async dialog=>{

     await dialog.accept();

console.log('******',dialog.message());

})


})








