import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import createPostActions from "@pageObjects/createPostPage/createpostActions";
import createPostAssert from "@pageObjects/createPostPage/createPostAssert";
import articleModActions from "@pageObjects/articlePage/articlePageActions";
import articleModAssertions from "@pageObjects/articlePage/articlePageAssertions";
import editArticleAssert from "@pageObjects/editArticlePage/editArticleAssert";
//objects creation
const postAssertion = new createPostAssert();
const postAction = new createPostActions();
const articleModf = new articleModActions();
const articleModAsser = new articleModAssertions();
const editAssertion = new editArticleAssert();

//constants declaration
const email: string = "danazagha@hotmail.com";
const password: string = "layan123";
const newBody: string = "testingsijfhfklshiggsklgsjlhlghsdjlhaifhslfhsdflshfh";

Given("User choose article to modify", () => {
  cy.log(email, password);
  articleModAsser.goToModificationPageAndCheckUrl();
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
