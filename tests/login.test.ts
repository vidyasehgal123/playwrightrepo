import {chromium, test} from "@playwright/test"

test("Login test demo",async () =>{

   const browser = await chromium.launch({
    headless : false
   }
    
   );
   const context = await browser.newContext();
   const page= await context.newPage();

   await page.goto("https://ecommerce-playground.lambdatest.io/")
   await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
   await page.click("'Login'")

   await page.getByPlaceholder("E-Mail Address").fill("vidya.saigal2gmail.com");
   await page.getByPlaceholder("Password").fill("Abcd@123");
   await page.click("input[value='Login']");
   await page.waitForTimeout(5000);

   const page1 =await context.newPage();
   await page1.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");

})