import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import loginActions from "C:/Users/HP/Desktop/cypress-test-repo/cypress/pageObjects/loginPage/loginActions";
import loginAssersions from "C:/Users/HP/Desktop/cypress-test-repo/cypress/pageObjects/loginPage/loginAssersions";
//objects creation
const loginAction = new loginActions();
const loginAssert = new loginAssersions();

//constants declaration
const email = "danazagha@hotmail.com";
const password = "layan123";

Given("User Open Login Page", () => {
  loginAction.openLoginPage();
});

When("the email field is blank", () => {
  loginAction.getEmail();
  loginAction.fillPassword(password);
});

And("Signin Button Is Clicked", () => {
  loginAction.clickSubmitButton();
});

Then("User can't login immediately", () => {
  loginAssert.checkTheExistancefEmail();
});

When("the password field is blank", () => {
  loginAction.fillEmail(email);
  loginAction.getPassword();
});

And("Signin Button Is Clicked", () => {
  loginAction.clickSubmitButton();
});

Then("User can't login immediately", () => {
  loginAssert.checkTheExistancefPassword();
});
