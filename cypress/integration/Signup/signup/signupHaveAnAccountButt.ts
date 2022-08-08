import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import loginPageLocators from "cypress/locators/loginPageLocators";
import LoginActions from "@pageObjects/loginPage/loginActions";
import LoginAssertions from "@pageObjects/loginPage/loginAssersions";
import SignupAssertion from "@pageObjects/signupPage/signupAssersions";
import SignupActions from "@pageObjects/signupPage/signupActions";

//objects creation
const loginAction = new LoginActions();
const loginAssert = new LoginAssertions();
const signupAction = new SignupActions();
const signupAssert = new SignupAssertion();

//test#1
Given("User Open SignUp Page", () => {
  signupAction.goSignupPage();
});

When("User Click on HaveAnAccount Button", () => {
  signupAction.clickOnHaveAnAcoountButton();
});

Then("It open Login Page", () => {
  loginAssert.checkUrlValidity();
});
