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
const username = "fffgh555ygt";
const email = "dafffffhhu@hotmail.com";
const password = "layan123";

Given("User Open Signup Page", () => {
  signupAction.goSignupPage();
});

When("User Enter A valid UserName,Email and password", () => {
  signupAction.fillUserName(username);
  signupAction.fillEmail(email);
  signupAction.fillPassword(password);
});

And("User Click On Sign in Button", () => {
  signupAction.clickOnSigninButton();
});

Then("User SignUp Successfully", () => {
  signupAssert.checkUserFeedApperance();
});
