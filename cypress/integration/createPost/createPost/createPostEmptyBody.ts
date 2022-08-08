import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import createPostActions from "@pageObjects/createPostPage/createpostActions";
import createPostAssert from "@pageObjects/createPostPage/createPostAssert";

//objects creation
const postAction = new createPostActions();
const postAssert = new createPostAssert();

//constants declaration
const email: string = "danazagha@hotmail.com";
const password: string = "layan123";
const articleTitle: string = "testing14";
const theIdea: string = "Automation Testing Using Cypress";
const tags: string = "@layan";

Given("User go to the article page", () => {
  cy.log(email, password);
  cy.visit("/#/editor?");
});

When("The Body field is empty", () => {
  postAction
    .fillTitleField(articleTitle)
    .fillIdeaField(theIdea)
    .fillTagField(tags);
});

And("User click on publish article button", () => {
  postAction.clickPublishArticleButton();
});

Then("Body error message should be shown", () => {
  postAssert.checkEmptyBodyMsg();
});
