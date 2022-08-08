import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import LoginActions from "@pageObjects/loginPage/loginActions";
import LoginAssertions from "@pageObjects/loginPage/loginAssersions";
//objects creation
const loginAction = new LoginActions();
const loginAssert = new LoginAssertions();

//constants declaration
const password: string = "layan123";

Given("User Open Login Page", () => {
  loginAction.openLoginPage();
});

When("the email field is empty", () => {
  loginAction.fillPassword(password);
});

And("Signin Button Is Clicked", () => {
  loginAction.clickSubmitButton();
});

Then("Errorr message should show", () => {
  loginAssert.checkEmptyEmailErrorMsg();
});

And("User should nott be able to login", () => {
  loginAssert.checkUrlValidity();
});
