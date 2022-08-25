class SignupActions {
  goSignupPage() {
    cy.visit("/#/register");
    return this;
  }

  ///////////////getters
  getUsername() {
    cy.get('[type="text"]');
    return this;
  }

  getEmail() {
    cy.get('[type="email"]');
    return this;
  }

  ///////////filling
  fillUserName(username) {
    cy.get('[type="text"]').clear().type(username);
    return this;
  }

  fillEmail(email) {
    cy.get('[type="email"]').clear().type(email);
    return this;
  }

  fillPassword(password) {
    cy.get('[type="password"]').clear().type(password);
    return this;
  }
  //////////clicking
  clickOnSigninButton() {
    cy.get('[type="submit"]').click();
    return this;
  }

  clickOnHaveAnAcoountButton() {
    cy.contains("a", "Have an account?").click();
    return this;
  }
}
export default SignupActions;
