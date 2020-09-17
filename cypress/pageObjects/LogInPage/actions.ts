class LogInPageActions {

    openLoginPage() {
        cy.visit("#/user/login")
        cy.wait(10000)
    }

    tpyeInUsernameInputField(username: string) {
        cy.get('input[type="text"]').type(username)
        return this;
    }

    typeInPasswordInputField(userpassword: string) {
        cy.get('input[type="password"]').type(userpassword)
        return this;
    }

    clickOnSignInButton() {
        cy.contains(".btn", "Sign In")
    }
}
export default LogInPageActions