import { Given,When,And,Then } from "cypress-cucumber-preprocessor/steps";
import createpostByAPI from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/creatnewpostusingAPI/createnewpostApiAction";


const actionbyAPI = new createpostByAPI();

const Email="danahmooda@gmail.com";
const password="11715040";

before( ()=>{
    cy.Login(Email,password);
})

Given('User open create post page',()=>{
    actionbyAPI.getrequest();
})