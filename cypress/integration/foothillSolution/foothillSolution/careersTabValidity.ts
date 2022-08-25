import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import foothillSolutionActions from "@pageObjects/foothillSolution/foothillSolutionAction";
import foothillSolutionAssertions from "@pageObjects/foothillSolution/foothillSolutionAssertions";
//objects creation
const foothillActions = new foothillSolutionActions();
const foothillAssertions = new foothillSolutionAssertions();
//constants declaration
const foothill: string = "Foothill Solutions ";

Given("User go to Foothill Solutions website", () => {
  cy.visit("https://www.foothillsolutions.com/");
});

When("user click on Careers tab", () => {
  foothillActions.clickCareersButton();
});

Then("Careers page should be opend", () => {
  foothillAssertions.checkCareersPage();
});
