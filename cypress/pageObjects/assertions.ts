import { eq } from "cypress/types/lodash"

class Assertions {

    checkHomePageIsOpen() {
        cy.url().should('include', 'https://qaintazugg.restaurant365.com/#/grid/AllTransactionsGrid/00000000-0000-0000-0000-000000000000')

    }

    checkValidationMessageIsVisible() {

        cy.contains("This Field Is Required").should('be.visible')
    }

    checkInvalidUserNameOrPasswprd() {

        cy.on('window:alert', (txt) => {

            expect(txt).to.contains('Invalid UserNmae Or Password');
        })
    }
} export default Assertions  