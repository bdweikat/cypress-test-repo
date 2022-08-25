class foothillSolutionAssertions {
  checkFoothillWebsiteInResultList(isVisibe = true) {
    cy.contains("span", "Foothill Technology Solutions: Home").should(
      isVisibe ? "be.visible" : "not.exist"
    );
    return this;
  }

  checkFoothillFacebookInResultList(isVisibe = true) {
    cy.contains(
      "span",
      "Foothill Technology Solutions - Home - Facebook"
    ).should(isVisibe ? "be.visible" : "not.exist");
    return this;
  }
  ///
  checkHomeTabInWebsite(isVisibe = true) {
    cy.contains("a", "Home").should(isVisibe ? "be.visible" : "not.exist");
    return this;
  }
  checkAboutusTabInWebsite(isVisibe = true) {
    cy.contains("a", "About Us").should(isVisibe ? "be.visible" : "not.exist");
    return this;
  }
  checkCareersTabInWebsite(isVisibe = true) {
    cy.contains("a", "Careers").should(isVisibe ? "be.visible" : "not.exist");
    return this;
  }
  checkContactUsTabInWebsite(isVisibe = true) {
    cy.contains("a", "Contact Us").should(
      isVisibe ? "be.visible" : "not.exist"
    );
    return this;
  }
  //////
  checkHomePage(isVisibe = true) {
    cy.contains("div", "Empowering Operators Worldwide").should(
      isVisibe ? "be.visible" : "not.exist"
    );
    return this;
  }

  checkAboutusPage(isVisibe = true) {
    cy.url().should("contain", "https://www.foothillsolutions.com/about");
    return this;
  }
  checkCareersPage(isVisibe = true) {
    cy.url().should("contain", "https://www.foothillsolutions.com/careers");
    return this;
  }
  checkContactUsPage(isVisibe = true) {
    cy.url().should("contain", "https://www.foothillsolutions.com/contactus");
    return this;
  }

  //task3
  checkTheSortedList(actualarray = [], expectedarray = []) {
    cy.wrap(actualarray).should("eq", expectedarray);
  }
}
export default foothillSolutionAssertions;
