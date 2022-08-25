class LoginAssertions {
  checkUrlValidity() {
    cy.url().should("contains", "https://react-redux.realworld.io/#/login?");
    return this;
  }

  checkUserFeedVisiblity(isVisibe = true) {
    cy.contains("Your Feed").should(isVisibe ? "be.visible" : "not.exist");
    return this;
  }

  checkSignUpPageUrl() {
    cy.url().should("contain", "https://react-redux.realworld.io/#/register?");
    return this;
  }

  checkEmailValidationError(isVisibe = true) {
    cy.contains("li", "email").should(isVisibe ? "be.visible" : "not.exist");
    return this;
  }

  checkPasswordValidatoinErrorMsg(isVisibe = true) {
    cy.contains("ul", "password").should(isVisibe ? "be.visible" : "not.exist");
    return this;
  }

  checkEmptyEmailErrorMsg(isVisibe = true) {
    cy.contains("li", "email can't be blank").should(
      isVisibe ? "be.visible" : "not.exist"
    );
    return this;
  }

  checkEmptyPasswordErrorMsgg(isVisibe = true) {
    cy.contains("li", "password can't be blank").should(
      isVisibe ? "be.visible" : "not.exist"
    );
    return this;
  }
}

export default LoginAssertions;
