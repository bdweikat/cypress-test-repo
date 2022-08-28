class createpostAssertion{
  NewpostFormAppearance(){
    cy.get("input").eq(0).should("be.visible");
    cy.get("input").eq(1).should("be.visible");
    cy.get("textarea").should("be.visible");
    cy.get("input").eq(2).should("be.visible");
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
    cy.get("input").eq(0).should("be.visible");
  }
}
export default createpostAssertion