import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import foothillSolutionActions from "@pageObjects/foothillSolution/foothillSolutionAction";
import foothillSolutionAssertions from "@pageObjects/foothillSolution/foothillSolutionAssertions";
//objects creation
const foothillActions = new foothillSolutionActions();
const foothillAssertions = new foothillSolutionAssertions();
//constants declaration
const foothill: string = "Foothill Solutions ";

Given("User go to google.com", () => {
  cy.visit("/");
});

When("User search for Foothill Solutions", () => {
  foothillActions.fillGoogleSearchField(foothill);
});

And("click on search button", () => {
  foothillActions.clickGoogleSearchButton();
});

Then("Foothill Solutions website should appear in the result page", () => {
  foothillAssertions.checkFoothillWebsiteInResultList();
});

And("Foothill Solutions facebook page should appear in the result page", () => {
  foothillAssertions.checkFoothillFacebookInResultList();
});
