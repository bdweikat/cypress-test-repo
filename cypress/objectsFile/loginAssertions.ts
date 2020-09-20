class LoginPageAssertions{

CheckErrorMessageIsDisplay(value: string){
    cy.contains(value).should('be.visible');
 
}


checkHomePageIsOpen(isOpen: boolean){
    cy.url().should("contains", isOpen ? "/grid/AllTransactionsGrid" : "/login");
}
}export default LoginPageAssertions;