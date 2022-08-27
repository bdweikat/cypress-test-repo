import { Given, Then, When, After } from "cypress-cucumber-preprocessor/steps";

Given("User open Main Page" , ()=>{
   // cy.viewport('iphone-x');
   // cy.viewport(2000,1000); //To control higth &width
   /* cy.visit("/"); //baseURL  
    cy.get('h1');
    cy.get('button').first();
    //cy.get('#Your App:cypress-test-repo');
    cy.get('.feed-toggle');
    cy.get('li');
    cy.get('.col-md-9').children();
    cy.contains('Create a new implementation');
    cy.get('.tag-default.tag-pill.tag-outline').first().click();*/
    cy.visit("/editor");
   // cy.request("")
   // cy.get(':nth-child(3) > .nav-link').click();
    //cy.go('back');
    //cy.get(':nth-child(1) > .form-control').type('Dana');
  //  cy.get('.btn').should('be.visible');
    //cy.url().should('contain','//react-redux');
    //cy.title();
    //cy.setCookie('value','all values');

})
