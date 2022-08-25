class foothillSolutionActions {
  fillGoogleSearchField(foothill) {
    cy.get(".gLFyf").clear().type(foothill);
    return this;
  }

  clickGoogleSearchButton() {
    cy.get("center").children().first().click();
    return this;
  }

  clickHomeButton() {
    cy.contains("a", "Home").click();
    return this;
  }
  clickAboutusButton() {
    cy.contains("a", "About Us").click();
    return this;
  }
  clickCareersButton() {
    cy.contains("a", "Careers").click();
    return this;
  }
  clickContactUsButton() {
    cy.contains("a", "Contact Us").click();
    return this;
  }
}
export default foothillSolutionActions;
