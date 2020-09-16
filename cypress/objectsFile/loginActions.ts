class Login{

    openR365LoginPage(){
        cy.visit('#/user/login');
    }

    fillUsernameField( username){
        cy.get('[data-testid=userIdInputField]').type(username)

    }
    fillPasswordField( password){
        cy.get('[data-testid=passwordInputField]').type(password)

    }
    clickOnSigninButton(){
        cy.get('[data-testid=signInButton]').should('be.visible').click()
    }
    

} export default Login;