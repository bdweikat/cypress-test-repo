import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginAssertions from "@pageObjects/loginPage/loginAssersions";
import SignupAssertion from "@pageObjects/signupPage/signupAssersions";
import SignupActions from "@pageObjects/signupPage/signupActions";

//objects creation
const loginAssert = new LoginAssertions();
const signupAction = new SignupActions();
const signupAssert = new SignupAssertion();
//constants decleratiom
const username = "jad1";
const email = "danazagha1@hotmail.com";
const password = "1234566";

Given("User Open Signup Page", () => {
  signupAction.goSignupPage();
});

When("User enter a used Email and Password", () => {
  signupAction.fillUserName(username);
  signupAction.fillEmail(email);
  signupAction.fillPassword(password);
});

And("Signin Button Is Clicked", () => {
  signupAction.clickOnSigninButton();
});

Then("EmailuError message should be shown", () => {
  signupAssert.checkUsedEmailandPasswordErrorMsg1();
});

And("PassworduError message should be shown", () => {
  signupAssert.checkUsedEmailandPasswordErrorMsg2();
});

And("User should not be able to SignUp", () => {
  loginAssert.checkSignUpPageUrl();
});
