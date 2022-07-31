import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import signupActions from "C:/Users/HP/Desktop/cypress-test-repo/cypress/pageObjects/signupPage/signupActions";
import signupAssersions from "C:/Users/HP/Desktop/cypress-test-repo/cypress/pageObjects/signupPage/signupAssersions";

//objects creation
const signupAction = new signupActions();
const signupAssert = new signupAssersions();
//constants decleratiom
const username = "la323klrrr";
const email = "danazagha112347rrr@hotmail.com";
const password = "layan123";

Given("User Open Signup Page", () => {
  signupAction.visit();
});

When("User Type Username , Email and Password", () => {
  signupAction.fillUserName(username);
  signupAction.fillEmail(email);
  signupAction.fillPassword(password);
});

And("User Click On The Sign in Button", () => {
  signupAction.clickOnSigninButton();
});

Then("User Sign Up Successfully", () => {
  signupAssert.userFeedApperance();
});
