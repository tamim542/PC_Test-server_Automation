//import SignInWebsite from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/Utilities.js';

describe('signin Page load', () => {
    //const singninWebsite = new SignInWebsite();
    const utilities = new Utilities();
    it('signin button click', async () => {

        //await browser.url('https://prolific-cloud.pc-staging.com/');
       // await browser.url('https://prolific1.pc-staging.com/signin');
       await browser.url('https://abc-5021.pc-staging.com/admin');
       await browser.maximizeWindow();
        
       await utilities.Signin();
  

        
        await browser.pause(5000);


    })


})