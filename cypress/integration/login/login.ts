import {Given,When,Then} from "cypress-cucumber-preprocessor/steps";
import { contains, when } from "cypress/types/jquery";
import  Login  from "../../objectsFile/loginActions";
import  loginAss  from "../../objectsFile/loginAssertions";

//import login from "cypress/objects/loginActions";

const loginObject = new Login();
const loginAssertion=new loginAss();

Given('I open R365 login page', () => {
loginObject.openR365LoginPage();
  });
 
  When('insert username {string}', (content) => { 
    loginObject.fillUsernameField(content);
  });
  When('insert password {string}', (content) => { 
    loginObject.fillPasswordField(content);
});
 
  When('click on SignIn button', () => {
    loginObject.clickOnSigninButton();
  });
  
  Then('{string} should be shown', (content) => {
    loginAssertion.checkLoginResult(content);

  });
  Then('{string} should include', (content)=>{
    loginAssertion.checkURL(content);
   
  });
  
