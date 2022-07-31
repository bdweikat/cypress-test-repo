class Actions {
  visit() {
    cy.visit("/#/register");
  }

  /*getAllFeilds() {
    cy.get('[type="text"]').as("username1");
    cy.get('[type="email"]').as("email");
    cy.get('[type="password"]').as("password");

    return this;
  }*/
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

  clickOnSigninButton() {
    cy.get('[type="submit"]').click();
  }
}
export default Actions;
