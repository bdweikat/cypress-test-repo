 class SignupActions{
    visitsignup()
    {
      cy.visit('/register'); 
      return this;
    }
    FillUserName(Name)
    {
        cy.get('[type="text"]').clear().type(Name);
        return this;
    }
    FillEmail(email)
    {
        cy.get('[type="email"]').clear().type(email);
        return this;
    }
    FillPassword(pass)
    {
        cy.get('[type="password"]').clear().type(pass);
        return this;
    }
    clicksignin()
    {
        cy.get('[type="submit"]').click();
        return this;
    }

}
export default SignupActions