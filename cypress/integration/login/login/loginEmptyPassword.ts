import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import LoginActions from "@pageObjects/loginPage/loginActions";
import LoginAssertions from "@pageObjects/loginPage/loginAssersions";
//objects creation
const loginAction = new LoginActions();
const loginAssert = new LoginAssertions();

//constants declaration
const email: string = "danazagha@hotmail.com";

Given("User Open Login Page", () => {
  loginAction.openLoginPage();
});

When("the password field is empty", () => {
  loginAction.fillEmail(email);
});

And("Signin Button Is Clicked", () => {
  loginAction.clickSubmitButton();
});

Then("Erroor message should showw", () => {
  loginAssert.checkEmptyPasswordErrorMsgg();
});

And("User shouldd not be able to login", () => {
  loginAssert.checkUrlValidity();
});
