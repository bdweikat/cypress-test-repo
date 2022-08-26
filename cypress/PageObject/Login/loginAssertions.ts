class loginassertions{
    validityURL(){
        cy.contains("h1","Sign In").should('be.visible');
    }
    successfullylogin(){
        cy.contains("a","Your Feed").should('be.visible');
    }
    ErrormassegeAppear(){
        cy.get('.error-messages > li').should('be.visible');
    }
    Notsuccesfullylogin(){
        cy.contains("h1","Sign In").should('be.visible');  
    }
}
export default loginassertions