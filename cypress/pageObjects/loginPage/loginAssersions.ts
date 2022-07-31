import loginActions from "C:/Users/HP/Desktop/cypress-test-repo/cypress/pageObjects/loginPage/loginActions";

const loginAction = new loginActions();
class LoginAssertions {
  checkUserFeedVisible(isVisibe = true) {
    cy.contains("Your Feed").should(isVisibe ? "be.visible" : "not.exist");
  }

  checkTheExistancefEmail(isVisibe = true) {
    loginAction
      .getEmailErrorMessage()
      .should(isVisibe ? "be.visible" : "not.exist");
    /* cy.get(".error-messages")
      .should(isVisibe ? "be.visible" : "not.exist")
      .and("eq", "email can't be blank");*/
  }

  checkTheExistancefPassword(isVisibe = true) {
    loginAction
      .getPasswordErrorMessage()
      .should(isVisibe ? "be.visible" : "not.exist");
    /* cy.get(".error-messages")
      .should(isVisibe ? "be.visible" : "not.exist")
      .and("eq", "email can't be blank");*/
  }
}

export default LoginAssertions;
