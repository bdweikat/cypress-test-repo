class Actions {
  loginSteps(email, password) {
    cy.visit("/#/login");
    cy.get('[type="email"]').type(email);
    cy.get('[type="password"]').type(password);
    cy.get('[type="submit"]').click();
    cy.contains("Your Feed").should("be.visible");
  }

  clickNewPostButton() {
    cy.get('[href="#editor"]').click();
  }

  fillAllFeilds(articleTitle, theIdea, articleBody, Tags) {
    cy.get('[placeholder="Article Title"]').type(articleTitle);
    cy.get(":nth-child(2) > .form-control").type(theIdea);
    cy.get('[placeholder="Write your article (in markdown)"]').type(
      articleBody
    );
    cy.get('[placeholder="Enter tags"]').type(Tags);
    return this;
  }

  clickPublishArticleButton() {
    cy.get('[type="button"]').click();
  }
}
export default Actions;
