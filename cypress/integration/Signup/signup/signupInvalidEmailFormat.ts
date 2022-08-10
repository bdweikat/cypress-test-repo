import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginAssertions from "@pageObjects/loginPage/loginAssersions";
import SignupActions from "@pageObjects/signupPage/signupActions";

//objects creation

const loginAssert = new LoginAssertions();
const signupAction = new SignupActions();

//constants decleratiom
const email: string = "danaz347rrrttt@hotmail.com";

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
