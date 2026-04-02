
import {test} from '@playwright/test';
import { loginmethod } from '../tests/POM/method/loginmethod';
import { context } from '@cucumber/cucumber';



   


test('Login page', async({page})=>{

 const loginMethod = new loginmethod(page);
 
  await loginMethod.gotopage();

  /* await page.locator('a:has-text("Bootstrap List Box")').click();
 await page.locator('ul.list-group.sp_list_group.mb-20.mt-10').first().click();
  await page.locator('ul.list-group.sp_list_group.mb-20.mt-10 li').nth(1).click();
  await page.locator('.block.mx-auto.border.border-black.mt-10.px-10.py-2.rounded.text-black.btn.btn-default.btn-sm.move-right').click();
  await page.locator('.btn.btn-default.btn-sm.move-left.transform.rotate-180.border.border-black.block.mx-auto.border.border-black.mt-10.px-10.py-2.rounded.text-black').click(); */


  await page.locator('a:has-text("Javascript Alerts")').click();
  await page.locator('button[type="button"]').nth(0).click();

  page.on('dialog', async dialog=>{
    console.log(dialog.message);
    
await page.waitForTimeout(5000);
    await dialog.accept()
  })

//await page.waitForTimeout(5000);
  //await page.pause();


 await page.goBack();
 
 await page.waitForTimeout(5000);

const context = await browser.newContext();
  const page = await context.newPage();

        
await page.goto('https://www.testmuai.com/selenium-playground/')
await page.locator('a:has-text("Window Popup Modal")').click(); 

// Set up listener with timeout
const newPagePromise = context.waitForEvent('page', { timeout: 5000 }).catch(e => {
  console.log('No new page detected, link may open externally');
  return null;
});

await page.locator("a[title='Follow @Lambdatesting on Twitter']").click();

const newPage = await newPagePromise;
if (newPage) {
  await newPage.waitForLoadState();
  console.log(await newPage.title());
} else {
  console.log('Could not capture new window - may have opened externally');
}


})



