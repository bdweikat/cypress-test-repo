import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import createPostActions from "@pageObjects/createPostPage/createpostActions";
import createPostAssert from "@pageObjects/createPostPage/createPostAssert";

//objects creation
const postAction = new createPostActions();
const postAssert = new createPostAssert();

//constants declaration
const email: string = "danazagha@hotmail.com";
const password: string = "layan123";
const myarticleTitle: string = "test11";
const theIdea: string = "Automation Testing Using Cypress";
const articleBody: string =
  "The web has evolved.Finally, testing has too.Fast, easy and reliable testing for anything that runs in a browser";

Given("User go to the article page", () => {
  cy.log(email, password);
  cy.visit("/#/editor?");
});

When("The Tags field is empty", () => {
  postAction
    .fillTitleField(myarticleTitle)
    .fillBodyField(articleBody)
    .fillIdeaField(theIdea);
});

And("User click on publish article button", () => {
  postAction.clickPublishArticleButton();
});

Then("Tags error message should be shown", () => {
  postAssert.checkArticleTitle(myarticleTitle);
});
