class LoginAssertions {
  checkUrlValidity() {
    cy.url().should("contains", "https://react-redux.realworld.io/#/login?");
  }
  checkAllComponentsVisiblity(isVisibe = true) {
    cy.get(".auth-page").should(isVisibe ? "be.visible" : "not.exist");
  }

  checkUserFeedVisiblity(isVisibe = true) {
    cy.contains("Your Feed").should(isVisibe ? "be.visible" : "not.exist");
  }

  checkSignUpPageUrl(isContain = true) {
    cy.url().should("contain", "https://react-redux.realworld.io/#/register?");
  }

  checkEmailValidationError(isVisibe = true) {
    cy.contains("li", "email").should(isVisibe ? "be.visible" : "not.exist");
  }

  checkPasswordValidatoinErrorMsg(isVisibe = true) {
    cy.contains("ul", "password").should(isVisibe ? "be.visible" : "not.exist");
  }

  checkEmptyEmailErrorMsg(isVisibe = true) {
    cy.contains("li", "email can't be blank").should(
      isVisibe ? "be.visible" : "not.exist"
    );
  }

  checkEmptyPasswordErrorMsgg(isVisibe = true) {
    cy.contains("li", "password can't be blank").should(
      isVisibe ? "be.visible" : "not.exist"
    );
  }
}

export default LoginAssertions;
