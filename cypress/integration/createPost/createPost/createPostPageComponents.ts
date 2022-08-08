import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import createPostActions from "@pageObjects/createPostPage/createpostActions";
import createPostAssert from "@pageObjects/createPostPage/createPostAssert";
//objects creation
const postAssertion = new createPostAssert();
const postAction = new createPostActions();

//constants declaration
const email: string = "danazagha@hotmail.com";
const password: string = "layan123";

Given("User go to create post page", () => {
  cy.log(email, password);
  cy.visit("/#/editor");
});

Then("User see all components of the page", () => {
  postAssertion.checkAllComponentsVisiblity();
});
