import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginActions from "@pageObjects/loginPage/loginActions";
import LoginAssertions from "@pageObjects/loginPage/loginAssersions";
//objects creation
const loginAction = new LoginActions();
const loginAssert = new LoginAssertions();

//constants declaration
const email: string = "a@hotmail.com";
const password: string = "layan123";

//test#1
Given("User Open Login Page", () => {
  loginAction.openLoginPage();
});

When("User Enter invalid Email and valid password", () => {
  loginAction.fillEmail(email);
  loginAction.fillPassword(password);
});

And("User Click On Sign in Button", () => {
  loginAction.clickSubmitButton();
});

Then("Error messagee should show", () => {
  loginAssert.checkEmailValidationError();
});

And("User should not be able to loginn", () => {
  loginAssert.checkUrlValidity();
});
