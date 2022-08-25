/*import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
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
const newIdea: string = "welcome";

Given("user click on edit article button", () => {
  cy.log(email, password);
  articleModAsser.goToArticlePageAndCheckUrl();
  articleModf.clickEditArticleButton();
});

When("modify the idea of the article", () => {
  cy.wait(500);
  postAction.fillIdeaField(newIdea);
});

Then("the modified Idea will appear", () => {
  editAssertion.getAndCheckArticleIdea();
});
*/
