import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginAssertions from "@pageObjects/loginPage/loginAssersions";
import SignupActions from "@pageObjects/signupPage/signupActions";

//objects creation
const loginAssert = new LoginAssertions();
const signupAction = new SignupActions();

Given("User Open SignUp Page", () => {
  signupAction.goSignupPage();
});

Then("the SignUp page will appear", () => {
  loginAssert.checkSignUpPageUrl();
});
