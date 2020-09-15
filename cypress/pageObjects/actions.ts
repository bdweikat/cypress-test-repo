class Actions {

    openLoginPage() {
        cy.visit('https://qaintazugg.restaurant365.com/')
    }

    tpyeInUsernameInputField() {
        return cy.get('input[type="text"]').type('cypressUser')
    }

    typeInPasswordInputField() {
        return cy.get('input[type="password"]').type('R3656wp')
    }

    typeInInvalidUserNameInputField() {
        return cy.get('input[type="text"]').type('sondos')
    }

    typeInInvalidPasswordInputField() {
        return cy.get('input[type="password"]').type('ggggg')
    }

    clickOnSignInButton() {
        cy.get('.btn').contains('Sign In').click()
    }
}
export default Actions  