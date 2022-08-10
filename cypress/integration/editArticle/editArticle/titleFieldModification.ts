import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import createPostActions from "@pageObjects/createPostPage/createpostActions";
import articleModActions from "@pageObjects/articlePage/articlePageActions";
import articleModAssertions from "@pageObjects/articlePage/articlePageAssertions";
import editArticleActions from "@pageObjects/editArticlePage/editArticleActions";
import editArticleAssert from "@pageObjects/editArticlePage/editArticleAssert";
//objects creation

const postAction = new createPostActions();
const articleModf = new articleModActions();
const articleModAsser = new articleModAssertions();
const editAssertion = new editArticleAssert();
const editActions = new editArticleActions();

//constants declaration
const email: string = "danazagha@hotmail.com";
const password: string = "layan123";
const newTitle: string = "testing7349";

Given("user click on edit article button", () => {
  cy.log(email, password);
  articleModAsser.goToArticlePageAndCheckUrl();
  articleModf.clickEditArticleButton();
});

When("modify the title of the article", () => {
  cy.wait(500);
  postAction.fillTitleField(newTitle);
});

/*And("click on Publishhh Article Button", () => {
  postAction.clickPublishArticleButton();
});*/

Then("the title will be changed", () => {
  editAssertion.getAndCheckArticleTitle();
});
