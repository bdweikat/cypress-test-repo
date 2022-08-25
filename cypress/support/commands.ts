import "@testing-library/cypress/add-commands";
import "cypress-file-upload";
import "cypress-wait-until";

declare global {
  namespace Cypress {
    interface Chainable {
      loginByApi(email: string, password: string);
    }
  }
}

Cypress.Commands.add("loginByApi", (email, password) => {
  return cy
    .request({
      method: "POST",
      url: `https://api.realworld.io/api/users/login`,
      body: {
        user: { email, password },
      },
    })
    .then((resp) => {
      localStorage.setItem("jwt", resp.body.user.token);
      //localStorage.setItem("userInfo", JSON.stringify(resp.body.user));
    });
});

/*Cypress.Commands.add("hiY", (email, password) => {
  cy.session([email, password], () => {
    cy.visit("/");
    cy.contains("a", "Global Feed").click();
    cy.get(".preview-link").eq(0).children().first().click();
    cy.get("h1").invoke("text").as("clickedTitle");
    cy.get("@clickedTitle").then((clickedTitle) => {
      cy.url().should("contain", clickedTitle);
    });
  });
});*/
