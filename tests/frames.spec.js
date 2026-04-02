

import {test} from '@playwright/test'


test('test frames', async ({browser})=>{

const context = await browser.newContext();
const page = await context.newPage();

await page.goto('https://the-internet.herokuapp.com/nested_frames')

const frames = page.frames();

console.log("***length***",frames.length);

for(const frame of frames){

    const text = await frame.locator('div[id="content"]').textContent();
    
    
    console.log('***text***',text);

    console.log('***name***',frame.name());
    console.log('***url***',frame.url());
}
})