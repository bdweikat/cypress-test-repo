import { Given, Then, When, After, And } from "cypress-cucumber-preprocessor/steps";
import loginassertions from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/Login/loginassertions";
import loginActions from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/Login/loginActions";

const loginAction = new loginActions();
const loginAssertion = new loginassertions();
const Email="danahmooda@gmail.com";
const password="11715040";
Given('User Visit Login Page',()=>{
    loginAction.visitloginpage();
})
When('User type in valid Email and valid password',()=>{
    loginAction.FillEmail(Email);
    loginAction.FillPassword(password);
})
And('User click on sign in Button',()=>{
    loginAction.clicksigninbtn();
})
Then('User login successfully',()=>{
    loginAssertion.successfullylogin();
})