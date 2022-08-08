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
//constants decleratiom
const username = "jad12347";
const email = "danazagha1@hotmail.com";
const password = "1234566";

Given("User Open Signup Page", () => {
  signupAction.goSignupPage();
});

When("User enter a used Email", () => {
  signupAction.fillUserName(username);
  signupAction.fillEmail(email);
  signupAction.fillPassword(password);
});

And("Signin Button Is Clicked", () => {
  signupAction.clickOnSigninButton();
});

Then("UsedEmailError message should show", () => {
  signupAssert.checkUsedEmailErrorMsg();
});

And("User should not be able to SignUp", () => {
  loginAssert.checkSignUpPageUrl();
});
