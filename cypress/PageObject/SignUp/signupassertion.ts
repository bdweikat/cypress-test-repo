class Signupassertions
{
    successfullsignup(){
        cy.contains("a","Your Feed").should('be.visible');
    }
}
export default Signupassertions;