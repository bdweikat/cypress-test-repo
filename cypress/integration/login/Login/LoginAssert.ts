class Assert {
  UserFeedApperance() {
    cy.contains("Your Feed").should("be.visible");
  }
}

export default Assert;
