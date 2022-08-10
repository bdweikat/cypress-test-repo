import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import createPostAssert from "@pageObjects/createPostPage/createPostAssert";
import articleModActions from "@pageObjects/articlePage/articlePageActions";
import articleModAssertions from "@pageObjects/articlePage/articlePageAssertions";
//objects creation
const postAssertion = new createPostAssert();
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

Then("User will see all components of the page", () => {
  postAssertion.checkAllComponentsVisiblity();
});
