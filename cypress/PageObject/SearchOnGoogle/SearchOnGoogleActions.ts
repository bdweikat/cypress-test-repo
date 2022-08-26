class GoogleAction{
    visitGooglepage(){
        cy.visit('/');
    }
    TypeOnSearchBox(Text){
        cy.get('[type="text"]').type(Text);
    }
    clickEnter(){
        cy.get('.CqAVzb > center > .gNO89b').click();
    }
}
export default GoogleAction