class Assert {
  EditArticleButtonShouldBeShown(isVisibe = true) {
    cy.get(".btn.btn-outline-secondary.btn-sm").should(
      isVisibe ? "be.visible" : "not.exist"
    );
  }
}

export default Assert;
