import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import createPostActions from "@pageObjects/createPostPage/createpostActions";
import articleModAssertions from "@pageObjects/articlePage/articlePageAssertions";
//objects creation

const postAction = new createPostActions();
const articleModAsser = new articleModAssertions();

//constants declaration
const email: string = "danazagha@hotmail.com";
const password: string = "layan123";

Given("click on thee article title", () => {
  cy.loginByApi(email, password);
  cy.visit("/");
  articleModAsser.getmyArticleUrl();
});

Then("the modification page will appear", () => {
  articleModAsser.checkmyArticleUrl();
});
