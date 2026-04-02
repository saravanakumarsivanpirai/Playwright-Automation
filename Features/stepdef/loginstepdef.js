import { Given, When, Then } from "@cucumber/cucumber";
import { loginmethod } from "../../tests/POM/method/loginmethod.js";

Given ('User navigate to the login page',async function(){ 
    const loginMethod = new loginmethod(this.page);
    await loginMethod.gotopage();
})

When ('User enters username and password',async function(){
    const loginMethod = new loginmethod(this.page);
    await loginMethod.username();
    await loginMethod.password();
})

Then ('click the login button',async function(){
    const loginMethod = new loginmethod(this.page);
    await loginMethod.submit();
   await this.page.pause();
})




