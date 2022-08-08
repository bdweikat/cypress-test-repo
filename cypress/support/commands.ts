import "@testing-library/cypress/add-commands";
import "cypress-file-upload";
import "cypress-wait-until";

declare global {
  namespace Cypress {
    interface Chainable {}
  }
}

Cypress.Commands.add("log", (email, password) => {
  cy.session([email, password], () => {
    cy.visit("/#/login");
    cy.get('[type="email"]').type(email);
    cy.get('[type="password"]').type(password);
    cy.get('[type="submit"]').click();
    cy.contains("Your Feed").should("be.visible");
  });
});

Cypress.Commands.add("hi", () => {
  cy.visit("/");
  cy.contains("a", "Global Feed").click();
  cy.get(".preview-link").eq(0).children().first().click();
  cy.get("h1").invoke("text").as("clickedTitle");
  cy.get("@clickedTitle").then((clickedTitle) => {
    cy.url().should("contain", clickedTitle);
  });
});
