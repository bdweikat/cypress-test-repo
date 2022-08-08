import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import createPostActions from "@pageObjects/createPostPage/createpostActions";
import articleModAssertions from "@pageObjects/articlePage/articlePageAssertions";
//objects creation

const postAction = new createPostActions();
const articleModAsser = new articleModAssertions();

//constants declaration
const email: string = "danazagha@hotmail.com";
const password: string = "layan123";

Given("User Sign in Website", () => {
  cy.log(email, password);
});

When("User click on Global Feed Button", () => {
  cy.visit("/");
  postAction.clickGlobalFeedButton();
});

Then("the modification page will appear", () => {
  articleModAsser.getAndCheckArticleUrl();
});
