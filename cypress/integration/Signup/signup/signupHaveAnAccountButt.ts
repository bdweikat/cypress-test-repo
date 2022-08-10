import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginActions from "@pageObjects/loginPage/loginActions";
import LoginAssertions from "@pageObjects/loginPage/loginAssersions";
import SignupAssertion from "@pageObjects/signupPage/signupAssersions";
import SignupActions from "@pageObjects/signupPage/signupActions";

//objects creation
const loginAssert = new LoginAssertions();
const signupAction = new SignupActions();

//test#1
Given("User Open SignUp Page", () => {
  signupAction.goSignupPage();
});

When("User Click on HaveAnAccount Button", () => {
  signupAction.clickOnHaveAnAcoountButton();
});

Then("it should go to login page", () => {
  loginAssert.checkUrlValidity();
});
