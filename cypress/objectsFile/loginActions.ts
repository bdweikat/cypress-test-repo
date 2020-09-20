import '@testing-library/cypress/add-commands';


class LoginPageActions{

    openR365LoginPage(){
        cy.visit('#/user/login');
    }

    fillUsernameField( username : string){
        cy.findByTestId('userIdInputField').type(username);
    }
    fillPasswordField( password : string){
        cy.findByTestId('passwordInputField').type(password);
    }
    clickOnSigninButton(){
        cy.findByTestId('signInButton').should('be.visible').click()
    }
    

} export default LoginPageActions;