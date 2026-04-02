

import {test} from '@playwright/test';

test('test tables', async ({browser})=>{

const context = await browser.newContext();
const page = await context.newPage();       


await page.goto('https://the-internet.herokuapp.com/tables')

const rows = page.locator('table tbody tr');

for (let i = 0; i < await rows.count(); i++) {

  const rowText = await rows.nth(i).innerText();

  if (rowText.includes('Doe')) { // 3rd row data
    await rows.nth(i).locator('text=edit').click();
    break;
  }
}

   
})

