class articleModAssertions {
  checkEditorPageUrl() {
    cy.url().should("contain", "/#/editor");
  }
  goToModificationPageAndCheckUrl() {
    cy.visit("/");
    cy.contains("a", "Global Feed").click();
    cy.wait(200);
    cy.get(".preview-link")
      .eq(0)
      .children()
      .first()
      .invoke("text")
      .as("clickedTitle");
    cy.get("@clickedTitle").then((clickedTitle) => {
      cy.get(".preview-link").eq(0).children().first().click();
      cy.url().should("contain", clickedTitle);
    });
  }

  getAndCheckArticleUrl() {
    cy.get(".preview-link")
      .eq(0)
      .children()
      .first()
      .invoke("text")
      .as("clickedTitle");
    cy.get("@clickedTitle").then((clickedTitle) => {
      cy.get(".preview-link").eq(0).children().first().click();
      cy.url().should("contain", clickedTitle);
    });
  }
}

export default articleModAssertions;
