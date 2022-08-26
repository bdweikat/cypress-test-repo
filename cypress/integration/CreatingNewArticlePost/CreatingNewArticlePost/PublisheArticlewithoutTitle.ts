import { Given, Then, When,And } from "cypress-cucumber-preprocessor/steps";
import createpostActions from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/CreatingNewArticlePost/CreatingNewArticlePostActions";
import createpostAssertion from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/CreatingNewArticlePost/CreatingNewArticlePostAssertions";

const createpostaction = new createpostActions();
const createpostassertion = new createpostAssertion();
const Email="danahmooda@gmail.com";
const password="11715040";
//const Title="Cypress";
const ArticleAbout="CYPRESS CMDS";
const Article="Cypress custom commands are described by users and not the default commands from Cypress."
const tags="cy";

Given('User click on new post button',()=>{
    createpostaction.clickNewPostBtn();
})
When('User Enter Description and body and tags inputs without enter the title',()=>{
    createpostaction.FillAbout(ArticleAbout);
    createpostaction.FillArticle(Article);
    createpostaction.FillTags(tags);
})
And('User click on Publish Article Button',()=>{
    createpostaction.clickpublishArticle();
})
Then('Error massege because of blank title appear',()=>{
    createpostassertion.ErrormsgTitleAppear();
})
And ('Article Should not published successfully',()=>{
    createpostassertion.Publishednotsuccesfully();
})