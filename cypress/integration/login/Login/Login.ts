import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Actions from "./LoginActions";
import Assert from "./LoginAssert";
//objects creation
const action = new Actions();
const assert = new Assert();
//constants declaration
const email = "danazagha@hotmail.com";
const password = "layan123";

Given("User Open Login Page", () => {
  action.visit();
});

When("User Enter An Exist Email And Password", () => {
  action.fillEmail(email);
  action.fillPassword(password);
});

And("User Click On Sign in Button", () => {
  action.submit();
});

Then("User Feed Should Be Shown", () => {
  assert.UserFeedApperance();
});
