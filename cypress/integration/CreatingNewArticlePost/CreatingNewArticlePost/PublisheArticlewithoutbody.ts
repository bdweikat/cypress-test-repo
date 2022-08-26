import { Given, Then, When,And } from "cypress-cucumber-preprocessor/steps";
import createpostActions from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/CreatingNewArticlePost/CreatingNewArticlePostActions";
import createpostAssertion from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/CreatingNewArticlePost/CreatingNewArticlePostAssertions";

const createpostaction = new createpostActions();
const createpostassertion = new createpostAssertion();
const Email="danahmooda@gmail.com";
const password="11715040";
const Title="Cypress CMDS";
const ArticleAbout="Cypress_Commands";
//const Article="Cypress custom commands are described by users and not the default commands from Cypress. These customized commands are used to create the test steps that are repeated in an automation flow. We can add and overwrite an already pre-existing command"
const tags="cypr";


Given('User click on new post button',()=>{
    createpostaction.clickNewPostBtn();
})
When('User Enter Article Title and Description and tags inputs without enter the body',()=>{
    cy.get('[placeholder="Write your article (in markdown)"]').clear();   
    createpostaction.FillArticleTitle(Title);
    createpostaction.FillAbout(ArticleAbout);
    createpostaction.FillTags(tags);
})
And('User click on Publish Article Button',()=>{
    createpostaction.clickpublishArticle();
})
Then('Error massege because of blank body appear',()=>{
    createpostassertion.ErrormsgBodyAppear();
})
And ('Article Should not published successfully',()=>{
    createpostassertion.Publishednotsuccesfully();
})