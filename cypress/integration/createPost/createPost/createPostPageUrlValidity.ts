import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import createPostActions from "@pageObjects/createPostPage/createpostActions";
import createPostAssert from "@pageObjects/createPostPage/createPostAssert";

//objects creation
const postAssertion = new createPostAssert();
const postAction = new createPostActions();

//constants declaration
const email: string = "danazagha@hotmail.com";
const password: string = "layan123";
Given("User Sign in Website", () => {
  cy.loginByApi(email, password);
  cy.visit("/");
});

When("User click on create Post Button", () => {
  postAction.clickNewPostButton();
});

Then("the ceratePost page will appear", () => {
  postAssertion.checkCreatePostUrl();
});
