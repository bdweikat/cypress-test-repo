import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginActions from "@pageObjects/loginPage/loginActions";
import LoginAssertions from "@pageObjects/loginPage/loginAssersions";

//objects creation
const loginAction = new LoginActions();
const loginAssert = new LoginAssertions();

Given("User Open Login Page", () => {
  loginAction.openLoginPage();
});

Then("User see all components of the page", () => {
  loginAssert.checkAllComponentsVisiblity();
});
