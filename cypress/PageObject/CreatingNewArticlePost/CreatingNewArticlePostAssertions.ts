class createpostAssertion{
  NewpostFormAppearance(){
    cy.get('[placeholder="Article Title"]').should("be.visible");
  }
  ArticlePublishedSuccessfully(){
    cy.get('[href="#/editor/Cypress-92119"]').should("be.visible");
  }
  ErrormsgTitleAppear(){
    cy.contains("li","title can't be blank").should("be.visible");
  }
  ErrormsgDescriptionAppear(){
    cy.contains("li","description can't be blank").should("be.visible");
  }
  ErrormsgBodyAppear(){
    cy.contains("li","body can't be blank").should("be.visible");
  }
  ErrormsgfrequenttitleAppear(){
    cy.contains("li","title must be unique").should("be.visible");
  }

  Publishednotsuccesfully(){
    cy.get('[placeholder="Article Title"]').should("be.visible");
  }
}
export default createpostAssertion