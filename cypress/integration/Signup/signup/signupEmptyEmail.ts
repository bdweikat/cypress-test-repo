import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginAssertions from "@pageObjects/loginPage/loginAssersions";
import SignupActions from "@pageObjects/signupPage/signupActions";

//objects creation
const loginAssert = new LoginAssertions();
const signupAction = new SignupActions();

//constants decleratiom
const username: string = "la323tt";
const password: string = "layan123";

Given("User Open Signup Page", () => {
  signupAction.goSignupPage();
});

When("the email field is empty", () => {
  signupAction.fillUserName(username);
  signupAction.fillPassword(password);
});

And("Signin Button Is Clicked", () => {
  signupAction.clickOnSigninButton();
});

Then("EmailError message should be shown", () => {
  loginAssert.checkEmailValidationError();
});

And("User should not be able to SignUp", () => {
  loginAssert.checkSignUpPageUrl();
});
