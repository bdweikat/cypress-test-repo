import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginActions from "@pageObjects/loginPage/loginActions";
import LoginAssertions from "@pageObjects/loginPage/loginAssersions";
//objects creation
const loginAction = new LoginActions();
const loginAssert = new LoginAssertions();

//constants declaration
const email: string = "danazagha@hotmail.com";
const password: string = "layan12";

//test#1
Given("User Open Login Page", () => {
  loginAction.openLoginPage();
});

When("User Enter invalid Password and valid email", () => {
  loginAction.fillEmail(email);
  loginAction.fillPassword(password);
});

And("User Click On Sign in Button", () => {
  loginAction.clickSubmitButton();
});

Then("Error messagge should show", () => {
  loginAssert.checkPasswordValidatoinErrorMsg();
});

And("User should not be ablee to login", () => {
  loginAssert.checkUrlValidity();
});
