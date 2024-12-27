import {test} from "@playwright/test";

test("handling dropdown", async({ page}) => {
  
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo",{

        value : "Friday"
    })

    await page.waitForTimeout(3000);

    await page.selectOption("#multi-select",[{
        label: "Texas"
    },{
        index : 2
    
    } ,{
        value : "washington"
    }


] )

    //await page.getByText("First Selected").click();
    //await page.getByText("Get Last Selected").click();

    await page.waitForTimeout(4000);
})