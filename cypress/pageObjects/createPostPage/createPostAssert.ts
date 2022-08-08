class createPostAssert {
  checkCreatePostUrl() {
    cy.url().should("contain", "https://react-redux.realworld.io/#/editor?");
  }

  checkAllComponentsVisiblity(isVisibe = true) {
    cy.get(".row").should(isVisibe ? "be.visible" : "not.exist");
    return this;
  }

  checkArticleTitle(articleTitle: string) {
    cy.get(".banner > .container").should("contain", articleTitle);
    return this;
  }
  //Error Messages
  checkEmptyEmailMsg(isVisibe = true) {
    cy.contains("ul", "title can't be blank").should(
      isVisibe ? "be.visible" : "not.exist"
    );
    return this;
  }

  checkEmptyIdeaMsg(isVisibe = true) {
    cy.contains("ul", "description can't be blank").should(
      isVisibe ? "be.visible" : "not.exist"
    );
    return this;
  }

  checkEmptyBodyMsg(isVisibe = true) {
    cy.contains("ul", "body can't be blank").should(
      isVisibe ? "be.visible" : "not.exist"
    );
    return this;
  }

  checkUniqueTitleMsg(isVisibe = true) {
    cy.contains("ul", "title must be unique").should(
      isVisibe ? "be.visible" : "not.exist"
    );
    return this;
  }

  checkPublishedPost(title: string) {
    cy.contains("h1", title).should("be.visible");
    return this;
  }
}

export default createPostAssert;

/*Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
})*/
