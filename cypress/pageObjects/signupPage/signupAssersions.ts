class Assert {
  userFeedApperance() {
    cy.contains("Your Feed").should("be.visible");
  }
}

export default Assert;
