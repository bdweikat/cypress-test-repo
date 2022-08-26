import { Given, Then, When, After, And } from "cypress-cucumber-preprocessor/steps";
//import loginassertions from "cypress/PageObject/Login/loginAssertions";
import loginassertions from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/Login/loginassertions";
import loginActions from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/Login/loginActions";

const loginAction = new loginActions();
const loginAssertion = new loginassertions();
Given('User Visit Login Page',()=>{
    loginAction.visitloginpage();
})
Then('Log in page will appear',()=>{
    loginAssertion.validityURL();
})