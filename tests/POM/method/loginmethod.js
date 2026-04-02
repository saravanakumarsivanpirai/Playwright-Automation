import { loginlocator } from "../locator/loginlocator.js";
import { logindata } from "../data/logindata.js";

class loginmethod {

    constructor(page) {
        this.page = page;
    }

async gotopage()
{
      await this.page.goto('https://www.testmuai.com/selenium-playground/')

}

  /*  async username(username)
{
  await this.page.fill(loginlocator.username, logindata.username);
}

    async password(password)
{
  await this.page.fill(loginlocator.password, logindata.password);
}

    async submit()
{
await this.page.click(loginlocator.submit);
}*/
}

export { loginmethod }