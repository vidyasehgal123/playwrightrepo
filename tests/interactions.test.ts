import { test} from "@playwright/test";


test("",async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    await page.getByPlaceholder("Please enter your Message").fill("hividya") ;
})

test("sum",async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    await page.getByPlaceholder("Please enter first value").fill("3");
    await page.getByPlaceholder("Please enter second value").fill("6"); 
    await page.getByText("Get Sum").click();

})
