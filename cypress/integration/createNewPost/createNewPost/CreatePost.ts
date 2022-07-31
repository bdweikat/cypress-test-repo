import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import createPostActions from "C:/Users/HP/Desktop/cypress-test-repo/cypress/pageObjects/createPostPage/createpostActions";
import createPostAssert from "C:/Users/HP/Desktop/cypress-test-repo/cypress/pageObjects/createPostPage/createPostAssert";
/*import LoginAssert from "cypress/integration/login/Login/LoginAssert";
import LoginActions from "cypress/integration/login/Login/LoginActions";*/

//objects creation
const postAction = new createPostActions();
const postAssert = new createPostAssert();
/*const logassert = new LoginAssert();
const logaction = new LoginActions();*/

//constants declaration
const email = "danazagha@hotmail.com";
const password = "layan123";
const articleTitle = "Automation Testing9";
const theIdea = "Automation Testing Using Cypress";
const articleBody =
  "The web has evolved.Finally, testing has too.Fast, easy and reliable testing for anything that runs in a browser";
const tags = "@layan";

Given("User Sign in Website successfully", () => {
  postAction.loginSteps(email, password);
  /*logaction.visit();
  logaction.fillEmail(email).fillPassword(password).submit();
  logassert.UserFeedApperance();*/
});

When("User Click On New Post Button", () => {
  postAction.clickNewPostButton();
});

And("User Fill All The Four Fields In The Page", () => {
  postAction.fillAllFeilds(articleTitle, theIdea, articleBody, tags);
});

And("User Click On The Publish Article Button", () => {
  postAction.clickPublishArticleButton();
});

Then("New Post will be published", () => {
  postAssert.EditArticleButtonShouldBeShown();
});
