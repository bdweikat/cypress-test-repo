import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import createPostActions from "@pageObjects/createPostPage/createpostActions";
import articleModActions from "@pageObjects/articlePage/articlePageActions";
import articleModAssertions from "@pageObjects/articlePage/articlePageAssertions";
import editArticleAssert from "@pageObjects/editArticlePage/editArticleAssert";
import createPostDataApi from "@pageObjects/createPostPage/createPostDataApi";
//objects creation
const postAction = new createPostActions();
const articleModf = new articleModActions();
const articleModAsser = new articleModAssertions();
const editAssertion = new editArticleAssert();
const createPostApi = new createPostDataApi();
//constants declaration
const email: string = "danazagha@hotmail.com";
const password: string = "layan123";
const articleTitle: string = "test#3";
const newTitle: string = "test#70layan";
const theIdea: string = "Automation Testing Using Cypress";
const articleBody: string =
  "The web has evolved.Finally, testing has too.Fast, easy and reliable testing for anything that runs in a browser";
const tags: string = "";
let slug: string;
let modifiedTitle: string;

before(() => {
  cy.loginByApi(email, password);
});

Given("user create new article", () => {
  createPostApi
    .createNewArticle(articleTitle, theIdea, articleBody, tags)
    .then((res) => {
      slug = res.article.slug;
    });

  /* articleModAsser.goToArticlePageAndCheckUrl();
   articleModf.clickEditArticleButton();*/
});

When("user modify the title of the article", () => {
  cy.visit(`#/article/${slug}`);

  createPostApi.updatebytitle(articleTitle, newTitle);

  /*articleModf.clickEditArticleButton();
   cy.wait(500);
  postAction.fillBodyField(newBody);*/
});

/*And("click on Publish Article Button", () => {
  postAction.clickPublishArticleButton();
  cy.wait(500);
});*/

Then("the Title will be changed", () => {
  expect(modifiedTitle).to.eql(newTitle);
});
