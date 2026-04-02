import { Before, After } from "@cucumber/cucumber";
import { chromium } from "playwright";

let browser;
let page;

Before(async function() {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
    this.page = page;
});

