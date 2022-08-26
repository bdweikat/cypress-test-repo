import { Given, Then, When, After, And } from "cypress-cucumber-preprocessor/steps";
import loginassertions from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/Login/loginassertions";
import loginActions from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/Login/loginActions";

const loginAction = new loginActions();
const loginAssertion = new loginassertions();
const Email="dana@gmail.com";
const password="11715040";

Given('User Visit Login Page',()=>{
    loginAction.visitloginpage();
})

When('User type in an invalid Email and valid password',()=>{
    loginAction.FillEmail(Email);
    loginAction.FillPassword(password);
})

And('User click on sign in Button',()=>{
    loginAction.clicksigninbtn();
})

Then('Error massege should appear',()=>{
  loginAssertion.ErrormassegeAppear();
})

And('User should not login successfully',()=>{
    loginAssertion.Notsuccesfullylogin();
})