import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginActions from "@pageObjects/loginPage/loginActions";
import LoginAssertions from "@pageObjects/loginPage/loginAssersions";
//objects creation
const loginAction = new LoginActions();
const loginAssert = new LoginAssertions();

//constants declaration
const emaill: string = "danazagha@hotmail.com";
const passwordd: string = "layan123";

//test#1
Given("User Open Login Page", () => {
  loginAction.openLoginPage();
});

When("User Enter A valid Email and valid password", () => {
  loginAction.fillEmail(emaill);
  loginAction.fillPassword(passwordd);
});

And("User Click On Sign in Button", () => {
  loginAction.clickSubmitButton();
});

Then("User Login Successfully", () => {
  loginAssert.checkUserFeedVisiblity();
});