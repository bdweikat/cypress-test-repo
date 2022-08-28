class ApiAssertion
{
 PublishedSuccessfully(){
    cy.contains("button","Post Comment").should("be.visible");
  }
} 
export default ApiAssertion;


