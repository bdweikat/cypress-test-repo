import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginAssertions from "@pageObjects/loginPage/loginAssersions";
import SignupActions from "@pageObjects/signupPage/signupActions";

//objects creation
const loginAssert = new LoginAssertions();
const signupAction = new SignupActions();

//constants decleratiom
const username = "la323tt";
const email = "danaz347rrrttt@hotmail.com";

Given("User Open Signup Page", () => {
  signupAction.goSignupPage();
});

When("the password field is empty", () => {
  signupAction.fillUserName(username);
  signupAction.fillEmail(email);
});

And("Signin Button Is Clicked", () => {
  signupAction.clickOnSigninButton();
});

Then("PasswordError message should be shown", () => {
  loginAssert.checkPasswordValidatoinErrorMsg();
});

And("User should not be able to SignUp", () => {
  loginAssert.checkSignUpPageUrl();
});
