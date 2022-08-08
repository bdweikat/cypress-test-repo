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
const username = "la323tt";
const email = "danaz347rrrttt@hotmail.com";
const password = "layan123";

Given("User Open Signup Page", () => {
  signupAction.goSignupPage();
});

When("User Enter invalid Email", () => {
  signupAction.fillEmail(email);
});

And("User Click On Sign in Button", () => {
  signupAction.clickOnSigninButton();
});

Then("User should not be able to SignUp", () => {
  loginAssert.checkSignUpPageUrl();
});
