import { eq } from "cypress/types/lodash"

class LogInPageAssertions {

    checkHomePageIsOpen(userName: string) {
        cy.get("li[data-testid=userNameRibbonMenu]").should("contain", userName);
    }

    checkValidationMessageIsVisible(isVisible: boolean) {

        cy.contains("This Field Is Required").should(isVisible ? 'be.visible' : 'not.be.visible')
    }

    checkInvalidUserNameOrPasswprd() {
        cy.contains("Invalid UserName or Password").should('be.visible')
    }

} export default LogInPageAssertions