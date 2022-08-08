import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import createPostActions from "@pageObjects/createPostPage/createpostActions";
import createPostAssert from "@pageObjects/createPostPage/createPostAssert";

//objects creation
const postAction = new createPostActions();
const postAssert = new createPostAssert();

//constants declaration
const email: string = "danazagha@hotmail.com";
const password: string = "layan123";
const articleTitle: string = "testing19";
const theIdea: string = "Automation Testing Using Cypress";
const articleBody: string =
  "The web has evolved.Finally, testing has too.Fast, easy and reliable testing for anything that runs in a browser";
const tags: string = "@layan";

Given("User gotocreate post page", () => {
  cy.log(email, password);
  cy.visit("/#/editor?");
});

When("User enter a used title", () => {
  postAction
    .fillTitleField(articleTitle)
    .fillIdeaField(theIdea)
    .fillBodyField(articleBody)
    .fillTagField(tags);
});

And("User Click On The Publish Article Button", () => {
  postAction.clickPublishArticleButton();
});

Then("Used title error message should be shown", () => {
  postAssert.checkUniqueTitleMsg();
});
