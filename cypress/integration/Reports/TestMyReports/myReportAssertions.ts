import { eq } from "cypress/types/lodash"
import 'cypress-iframe'

class MyReportsPageAssertions {

    checkReporttitleIsListed() {
        //cy.get('h3[flex="40"]').find('Flash Reports')
        // cy.find('h3[flex="40"]').contains('Flash Reports')
        //cy.contains('Flash Reports').should('be.visible')

        // cy.frameLoaded('h3[flex="40"]');
        // //shift the focus to frame
        // cy.iframe().find('h3[flex="40"]').then(function (txt) {
        //     const txtframe = txt.text();
        //     //assertion to verify text
        //     expect(txtframe).to.contains('Flash Reports');
        //     cy.log(txtframe);
        // })
        cy.contains("h3", "Flash Report").should("be.visible")
    }

} export default MyReportsPageAssertions 