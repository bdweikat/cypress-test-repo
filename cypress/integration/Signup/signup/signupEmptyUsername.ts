import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginAssertions from "@pageObjects/loginPage/loginAssersions";
import SignupAssertion from "@pageObjects/signupPage/signupAssersions";
import SignupActions from "@pageObjects/signupPage/signupActions";

//objects creation
const loginAssert = new LoginAssertions();
const signupAction = new SignupActions();
const signupAssert = new SignupAssertion();
//constants decleratiom
const email: string = "danaz347rrrttt@hotmail.com";
const password: string = "layan123";

Given("User Open Signup Page", () => {
  signupAction.goSignupPage();
});

When("the username field is empty", () => {
  signupAction.fillEmail(email);
  signupAction.fillPassword(password);
});

And("Signin Button Is Clicked", () => {
  signupAction.clickOnSigninButton();
});

Then("Username Error message should be shown", () => {
  signupAssert.checkEmptyUsernameErrorMsg();
});

And("User should not be able to SignUp", () => {
  loginAssert.checkSignUpPageUrl();
});
