class loginActions{
    visitloginpage(){
        cy.visit('/login');
    }
    FillEmail(email){
        cy.get('[type="email"]').type(email);
    }
    FillPassword(pass){
        cy.get('[type="password"]').type(pass);
    }
    clicksigninbtn(){
        cy.get('[type="submit"]').click();
    }
   
}
export default loginActions