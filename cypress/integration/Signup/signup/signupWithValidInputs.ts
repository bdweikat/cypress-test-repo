import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import SignupAssertion from "@pageObjects/signupPage/signupAssersions";
import SignupActions from "@pageObjects/signupPage/signupActions";

//objects creation
const signupAction = new SignupActions();
const signupAssert = new SignupAssertion();
//constants decleratiom
const username: string = "fffgh555ygt";
const email: string = "dafffffhhu@hotmail.com";
const password: string = "layan123";

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
