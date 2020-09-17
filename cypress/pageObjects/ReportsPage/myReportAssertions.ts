import { eq } from "cypress/types/lodash"


class MyReportsPageAssertions {

    checkReporttitleIsListed() {
        cy.contains("h3", "Flash Report").should("be.visible")
    }

} export default MyReportsPageAssertions 