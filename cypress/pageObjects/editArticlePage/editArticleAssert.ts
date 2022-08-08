class editArticleAssert {
  getAndCheckArticleIdea() {
    cy.get("input").eq(1).invoke("val").as("newIdea");
    cy.get("@newIdea").then((newIdea) => {
      cy.contains("button", "Publish Article").click();
      cy.wait(600);
      //click on auther name
      cy.get(".author").click();
      cy.get(".article-preview").eq(0).should("contain", newIdea);
    });
  }

  getAndCheckArticleBody() {
    cy.get("textarea").invoke("val").as("newBody");
    cy.get("@newBody").then((newBody) => {
      cy.contains("button", "Publish Article").click();
      cy.wait(600);
      cy.get(".row").children().first().children().should("contain", newBody);
    });
  }

  getAndCheckArticleTitle() {
    cy.get("input").eq(0).invoke("val").as("clickedTitle");
    cy.get("@clickedTitle").then((clickedTitle) => {
      cy.contains("button", "Publish Article").click();
      cy.wait(600);
      cy.get("h1").should("contain", clickedTitle);
    });
  }
}
export default editArticleAssert;
