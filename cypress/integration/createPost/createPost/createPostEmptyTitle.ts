import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import createPostActions from "@pageObjects/createPostPage/createpostActions";
import createPostAssert from "@pageObjects/createPostPage/createPostAssert";

//objects creation
const postAction = new createPostActions();
const postAssert = new createPostAssert();

//constants declaration
const email: string = "danazagha@hotmail.com";
const password: string = "layan123";
const theIdea: string = "Automation Testing Using Cypress";
const articleBody: string =
  "The web has evolved.Finally, testing has too.Fast, easy and reliable testing for anything that runs in a browser";
const tags: string = "@layan";

Given("User go to the article page", () => {
  cy.log(email, password);
  cy.visit("/#/editor?");
});

When("The Title field is empty", () => {
  postAction
    .fillIdeaField(theIdea)
    .fillBodyField(articleBody)
    .fillTagField(tags);
});

And("User click on publish article button", () => {
  postAction.clickPublishArticleButton();
});

Then("Title error message should be shown", () => {
  postAssert.checkEmptyEmailMsg();
});
