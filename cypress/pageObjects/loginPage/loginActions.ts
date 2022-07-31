class LoginActions {
  openLoginPage() {
    cy.visit("/#/login");
    return this;
  }

  getEmailErrorMessage() {
    return cy.contains("email ");
  }

  getPasswordErrorMessage() {
    return cy.contains("password");
  }
  getEmail() {
    return cy.get('[type="email"]').clear();
  }

  getPassword() {
    return cy.get('[type="password"]').clear();
  }

  fillEmail(email) {
    this.getEmail().type(email);
    return this;
  }

  fillPassword(password) {
    this.getPassword().type(password);
    return this;
  }

  clickSubmitButton() {
    cy.get('[type="submit"]').click();
  }
}

export default LoginActions;
