class loginAss{

checkLoginResult(value:string){
    cy.contains(value).should('be.visible');
 
}

checkURL(value :string ){
    if(value=='fail')
    cy.url().should('contain', '/login') ;
    else if(value=='success')
    cy.url().should('contain', '/grid/AllTransactionsGrid');

 

}
}export default loginAss;