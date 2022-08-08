class SignupAssertion {
  checkUserFeedApperance() {
    cy.contains("Your Feed").should("be.visible");
  }

  checkEmailUsedErrorMsg(isVisibe = true) {
    cy.contains("email has already been taken").should(
      isVisibe ? "be.visible" : "not.exist"
    );
  }

  checkUsedInputsErrorMsg() {
    cy.contains("Your Feed").should("be.visible");
  }

  checkEmptyUsernameErrorMsg(isVisibe: boolean = true) {
    cy.contains("ul", "username can't be blank").should(
      isVisibe ? "be.visible" : "not.exist"
    );
  }

  checkUsedUsernameErrorMsg(isVisibe: boolean = true) {
    cy.contains("ul", "username has already been taken").should(
      isVisibe ? "be.visible" : "not.exist"
    );
  }

  checkUsedEmailErrorMsg(isVisibe: boolean = true) {
    cy.contains("ul", "email has already been taken").should(
      isVisibe ? "be.visible" : "not.exist"
    );
  }

  checkUsedEmailandPasswordErrorMsg1(isVisibe: boolean = true) {
    cy.get(".error-messages")
      .children()
      .first()
      .should("contain", "email has already been taken");
  }
  checkUsedEmailandPasswordErrorMsg2(isVisibe: boolean = true) {
    cy.get(".error-messages")
      .children()
      .last()
      .should("contain", "username has already been taken");
  }
}

export default SignupAssertion;
