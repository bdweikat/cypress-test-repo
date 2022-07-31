import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import loginActions from "C:/Users/HP/Desktop/cypress-test-repo/cypress/pageObjects/loginPage/loginActions";
import loginAssersions from "C:/Users/HP/Desktop/cypress-test-repo/cypress/pageObjects/loginPage/loginAssersions";
//objects creation
const loginAction = new loginActions();
const loginAssert = new loginAssersions();

//constants declaration
const email = "danazagha@hotmail.com";
const password = "layan123";

//test#1
Given("User Open Login Page", () => {
  loginAction.openLoginPage();
});

When("User Enter A valid Email And Password", () => {
  loginAction.fillEmail(email);
  loginAction.fillPassword(password);
});

And("User Click On Sign in Button", () => {
  loginAction.clickSubmitButton();
});

Then("User Login Successfully", () => {
  loginAssert.checkUserFeedVisible();
});
