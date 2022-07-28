class Assert {
  EditArticleButtonShouldBeShown() {
    cy.get(".btn.btn-outline-secondary.btn-sm").should("be.visible");
  }
}

export default Assert;
