import { Given,Then } from "cypress-cucumber-preprocessor/steps";
import createpostByAPI from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/creatnewpostusingAPI/createnewpostApiAction";
import ApiAssertion from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/creatnewpostusingAPI/createnewpostApiassertions";

const actionbyAPI = new createpostByAPI();
const assertionApi = new ApiAssertion();

const Email="danahmooda@gmail.com";
const password="11715040";
const Title="Automation";
const ArticleAbout=" Commands";
const Article="Cypress custom commands";
const tags="cypress22";

before( ()=>{
    cy.Login(Email,password);
})

Given('Create new post Article',()=>{
    actionbyAPI.createNewArticlePost(Title,ArticleAbout,Article,tags);
})

/*Then('Article should published successfully',()=>{
    assertionApi.PublishedSuccessfully();
})*/
