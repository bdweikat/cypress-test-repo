class SearchAssertions{
    validityURL(){
        cy.get('[alt="Google"]').should('be.visible');
    }
    ResultsAppear(){
        cy.contains("span","Foothill Technology Solutions: Home").should("be.visible");
        cy.contains("span","Foothill Technology Solutions - Facebook").should("be.visible");
    }
}
export default SearchAssertions