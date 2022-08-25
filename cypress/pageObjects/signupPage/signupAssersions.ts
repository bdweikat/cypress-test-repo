class SignupAssertion {
  checkUserFeedApperance() {
    cy.contains("Your Feed").should("be.visible");
    return this;
  }

  checkEmailUsedErrorMsg(isVisibe = true) {
    cy.contains("email has already been taken").should(
      isVisibe ? "be.visible" : "not.exist"
    );
    return this;
  }

  checkUsedInputsErrorMsg() {
    cy.contains("Your Feed").should("be.visible");
    return this;
  }

  checkEmptyUsernameErrorMsg(isVisibe: boolean = true) {
    cy.contains("ul", "username can't be blank").should(
      isVisibe ? "be.visible" : "not.exist"
    );
    return this;
  }

  checkUsedUsernameErrorMsg(isVisibe: boolean = true) {
    cy.contains("ul", "username has already been taken").should(
      isVisibe ? "be.visible" : "not.exist"
    );
    return this;
  }

  checkUsedEmailErrorMsg(isVisibe: boolean = true) {
    cy.contains("ul", "email has already been taken").should(
      isVisibe ? "be.visible" : "not.exist"
    );
    return this;
  }

  checkUsedEmailandPasswordErrorMsg1(isVisibe: boolean = true) {
    cy.get(".error-messages")
      .children()
      .first()
      .should("contain", "email has already been taken");
    return this;
  }

  checkUsedEmailandPasswordErrorMsg2(isVisibe: boolean = true) {
    cy.get(".error-messages")
      .children()
      .last()
      .should("contain", "username has already been taken");
    return this;
  }
}

export default SignupAssertion;
