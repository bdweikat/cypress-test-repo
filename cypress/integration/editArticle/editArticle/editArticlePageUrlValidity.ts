import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import articleModActions from "@pageObjects/articlePage/articlePageActions";
import articleModAssertions from "@pageObjects/articlePage/articlePageAssertions";
import createPostDataApi from "@pageObjects/createPostPage/createPostDataApi";

//objects creation
const articleModf = new articleModActions();
const articleModAsser = new articleModAssertions();
const createPostApi = new createPostDataApi();

//constants declaration
let data;
const email: string = "danazagha@hotmail.com";
const password: string = "layan123";
const articleTitle: string = "test#6";
const theIdea: string = "Automation Testing Using Cypress";
const articleBody: string =
  "The web has evolved.Finally, testing has too.Fast, easy and reliable testing for anything that runs in a browser";
const tags: string = "";
let slug1: string;
const newTitle: string = "test#70layan";

// Given("user create new article", () => {
//   createPostApi
//     .createNewArticle(articleTitle, theIdea, articleBody, tags)
//     .then((res) => {
//       slug1 = res.article.slug;
//     });
// });

// When("user Open newely created article", () => {
//   cy.then(() => {
//     cy.visit(`#/article/${slug1}`);
//   });
// });

// And("click on edit button", () => {
//   articleModf.clickEditArticleButton();
// });

// Then("the editor page will appear", () => {
//   cy.url().should("contain", "/editor/");
// });

// When("user modify the Body of the article", () => {
//   cy.visit(`#/article/${slug1}`);
//   createPostApi.updateArticle(slug1, newTitle);
//   /* cy.wait(500);
//   postAction.fillBodyField(newBody);*/
// });

/*after(() => {
  createPostApi.deleteArticleByTitle(articleTitle);
});/*/
