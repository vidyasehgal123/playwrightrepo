import { test} from "@playwright/test";

test("checkbox", async({ page }) => {

     await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
     const singlecheckbox = page.locator("id=isAgeSelected")
      await singlecheckbox.check();
      //expect(singlecheckbox).toBeChecked();

})