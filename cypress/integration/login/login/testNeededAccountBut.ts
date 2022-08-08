import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import LoginActions from "@pageObjects/loginPage/loginActions";
import LoginAssertions from "@pageObjects/loginPage/loginAssersions";
//objects creation
const loginAction = new LoginActions();
const loginAssert = new LoginAssertions();

//constants declaration
const email: string = "danazagha@hotmail.com";
const password: string = "layan123";

//test#1
Given("User Open Login Page", () => {
  loginAction.openLoginPage();
});

When("User Click on NeedAnAccount Button", () => {
  loginAction.clickNeedAnAccountButton();
});

Then("It open SignUp Page", () => {
  loginAssert.checkSignUpPageUrl();
});
