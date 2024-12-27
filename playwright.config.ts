import {  PlaywrightTestConfig } from '@playwright/test';
import { on } from 'events';

const config: PlaywrightTestConfig ={

  testMatch : ["tests/dropdown.test.ts"],
   use :{
     headless: false,
     screenshot: "on",
     "video":"on"
   }
   ,
   reporter: [["dot"],["json",{
       outputFile: "jsonreports/jsonReport.json"
   }],["html",{
    open :"never"
   }]]


};

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default config;