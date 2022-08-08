class articleModActions {
  checkCreatePostUrl() {
    cy.url().should("contain", "https://react-redux.realworld.io/#/article/");
  }

  clickArticleTitle() {
    cy.get(".preview-link").eq(0).children().first().click();
  }

  clickEditArticleButton() {
    cy.contains("a", "Edit Article").click();
  }

  checkAllComponentsVisiblity(isVisibe = true) {
    cy.get(".article-page").should(isVisibe ? "be.visible" : "not.exist");
    return this;
  }
}
export default articleModActions;
