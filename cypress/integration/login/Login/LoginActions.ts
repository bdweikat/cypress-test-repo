class Actions {
  visit() {
    cy.visit("/#/login");
  }

  fillEmail(email) {
    cy.get('[type="email"]').clear().type(email);
    return this;
  }

  fillPassword(password) {
    cy.get('[type="password"]').clear().type(password);
    return this;
  }

  submit() {
    cy.get('[type="submit"]').click();
  }
}
export default Actions;
