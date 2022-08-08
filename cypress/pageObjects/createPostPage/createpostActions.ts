class createPostActions {
  goToCreatePostPage() {
    cy.visit("/");
    return this;
  }

  findUserArticle() {
    cy.get(":nth-child(1) > .nav-link").click();
    return cy.get(".feed-toggle > .nav > :nth-child(2) > .nav-link").click();
  }

  //filling feilds
  fillTitleField(articleTitle) {
    cy.get("input").eq(0).clear().type(articleTitle);
    return this;
  }

  fillIdeaField(theIdea) {
    cy.get("input").eq(1).clear().type(theIdea);
    return this;
  }

  fillBodyField(articleBody) {
    cy.get("textarea").clear().type(articleBody);
    return this;
  }

  fillTagField(Tags) {
    cy.get("fieldset").children().eq(3).type(Tags);
    return this;
  }

  //buttons clicking
  clickNewPostButton() {
    cy.contains("a", "New Post").click();
    return this;
  }
  clickPublishArticleButton() {
    cy.contains("button", "Publish Article").click();
    return this;
  }

  clickHomeButton() {
    cy.contains("a", "Home").click();
    return this;
  }

  clickGlobalFeedButton() {
    cy.contains("a", "Global Feed").click();
    return this;
  }
}
export default createPostActions;
