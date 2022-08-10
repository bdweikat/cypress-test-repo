import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import createPostActions from "@pageObjects/createPostPage/createpostActions";
import articleModActions from "@pageObjects/articlePage/articlePageActions";
import articleModAssertions from "@pageObjects/articlePage/articlePageAssertions";
import editArticleAssert from "@pageObjects/editArticlePage/editArticleAssert";
//objects creation
const postAction = new createPostActions();
const articleModf = new articleModActions();
const articleModAsser = new articleModAssertions();
const editAssertion = new editArticleAssert();

//constants declaration
const email: string = "danazagha@hotmail.com";
const password: string = "layan123";
const newBody: string = "testingsijfhfklshiggsklgsjlhlghsdjlhaifhslfhsdflshfh";

Given("user click on edit article button", () => {
  cy.log(email, password);
  articleModAsser.goToArticlePageAndCheckUrl();
  articleModf.clickEditArticleButton();
});

When("user modify the Body of the article", () => {
  cy.wait(500);
  postAction.fillBodyField(newBody);
});

/*And("click on Publish Article Button", () => {
  postAction.clickPublishArticleButton();
  cy.wait(500);
});*/

Then("the Body will be changed", () => {
  editAssertion.getAndCheckArticleBody();
});
