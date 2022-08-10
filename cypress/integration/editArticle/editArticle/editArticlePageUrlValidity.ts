import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import articleModActions from "@pageObjects/articlePage/articlePageActions";
import articleModAssertions from "@pageObjects/articlePage/articlePageAssertions";
//objects creation
const articleModf = new articleModActions();
const articleModAsser = new articleModAssertions();

//constants declaration
const email: string = "danazagha@hotmail.com";
const password: string = "layan123";

Given("user click on edit article button", () => {
  cy.log(email, password);
  articleModAsser.goToArticlePageAndCheckUrl();
  articleModf.clickEditArticleButton();
});

Then("the editor page will appear", () => {
  articleModAsser.checkEditorPageUrl();
});
