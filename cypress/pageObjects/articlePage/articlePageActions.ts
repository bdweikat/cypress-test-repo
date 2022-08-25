class articleModActions {
  checkCreatePostUrl() {
    cy.url().should("contain", "https://react-redux.realworld.io/#/article/");
    return this;
  }

  clickArticleTitle() {
    cy.get(".preview-link").eq(0).children().first().click();
    return this;
  }

  clickEditArticleButton() {
    cy.contains("a", "Edit Article").click();
    return this;
  }
}
export default articleModActions;
