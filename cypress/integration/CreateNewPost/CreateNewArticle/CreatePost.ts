import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Actions from "./Actions";
import Assert from "./Assert";
/*import LoginAssert from "cypress/integration/login/Login/LoginAssert";
import LoginActions from "cypress/integration/login/Login/LoginActions";*/

//objects creation
const action = new Actions();
const assert = new Assert();
/*const logassert = new LoginAssert();
const logaction = new LoginActions();*/

//constants declaration
const email = "danazagha@hotmail.com";
const password = "layan123";
const articleTitle = "Automation Testing7";
const theIdea = "Automation Testing Using Cypress";
const articleBody =
  "The web has evolved.Finally, testing has too.Fast, easy and reliable testing for anything that runs in a browser";
const tags = "@layan";

Given("User Sign in Website successfully", () => {
  action.loginSteps(email, password);
  /*logaction.visit();
  logaction.fillEmail(email).fillPassword(password).submit();
  logassert.UserFeedApperance();*/
});

When("User Click On New Post Button", () => {
  action.clickOnNewPostButton();
});

And(
  "User Fill All The Four Fields In The Page -The Last One Is Optional-",
  () => {
    action.fillAllTheFourFeild(articleTitle, theIdea, articleBody, tags);
  }
);

And("User Click On The Publish Article Button", () => {
  action.ClickOnThePublishArticleButton();
});

Then("Edit Article Button Should Be Shown", () => {
  assert.EditArticleButtonShouldBeShown();
});
