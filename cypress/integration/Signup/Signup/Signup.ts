import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Actions from "./Actions";
import Assert from "./Assert";

//objects creation
const action = new Actions();
const assert = new Assert();
//constants decleratiom
const username = "la323";
const email = "danazagha1123@hotmail.com";
const password = "layan123";

Given("User Open Signup Page", () => {
  action.visit();
});

When("User Type Username , Email and Password", () => {
  action.fillUserName(username);
  action.fillEmail(email);
  action.fillPassword(password);
});

And("User Click On The Sign in Button", () => {
  action.submit();
});

Then("User Feed Should Be Shown", () => {
  assert.UserFeedApperance();
});
