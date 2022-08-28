import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import createpostActions from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/CreatingNewArticlePost/CreatingNewArticlePostActions";
import createpostAssertion from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/CreatingNewArticlePost/CreatingNewArticlePostAssertions";

const createpostaction = new createpostActions();
const createpostassertion = new createpostAssertion();
const Email="danahmooda@gmail.com";
const password="11715040";
before( ()=>{
    cy.Login(Email,password);
})

Given('User click on new post button',()=>{
    createpostaction.clickNewPostBtn();
})

Then('form of publish article with four fields appear',()=>{
    createpostassertion.NewpostFormAppearance();
})

