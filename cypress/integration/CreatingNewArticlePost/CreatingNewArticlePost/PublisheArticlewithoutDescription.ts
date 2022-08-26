import { Given, Then, When,And } from "cypress-cucumber-preprocessor/steps";
import createpostActions from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/CreatingNewArticlePost/CreatingNewArticlePostActions";
import createpostAssertion from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/CreatingNewArticlePost/CreatingNewArticlePostAssertions";

const createpostaction = new createpostActions();
const createpostassertion = new createpostAssertion();
const Email="danahmooda@gmail.com";
const password="11715040";
const Title="Cypress CMDs";
//const ArticleAbout="Cypress Commands";
const Article=" These customized commands are used to create the test steps that are repeated in an automation flow. "
const tags="cyp";

Given('User click on new post button',()=>{
    createpostaction.clickNewPostBtn();
})
When('User Enter Article Title and body and tags inputs without enter the Description',()=>{
    cy.get(':nth-child(2) > .form-control').clear();
    createpostaction.FillArticleTitle(Title);
    createpostaction.FillArticle(Article);
    createpostaction.FillTags(tags);
})
And('User click on Publish Article Button',()=>{
    createpostaction.clickpublishArticle();
})
Then('Error massege because of blank description appear',()=>{
    createpostassertion.ErrormsgDescriptionAppear();
})
And ('Article Should not published successfully',()=>{
    createpostassertion.Publishednotsuccesfully();
})