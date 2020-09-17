import { eq } from "cypress/types/lodash"

class LogInPageAssertions {

    checkHomePageIsOpen() {
        cy.url().should('include', '#/grid/AllTransactionsGrid/00000000-0000-0000-0000-000000000000')

    }

    checkValidationMessageIsVisible(isVisible: boolean) {

        cy.contains("This Field Is Required").should(isVisible ? 'be.visible' : 'not.be.visible')
    }

    checkInvalidUserNameOrPasswprd() {
        cy.contains("Invalid UserName or Password").should('be.visible')
    }

} export default LogInPageAssertions