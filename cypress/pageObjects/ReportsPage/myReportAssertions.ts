import { eq } from "cypress/types/lodash"


class MyReportsPageAssertions {

    checkListContainsReport(reportName: string, isContain: boolean) {
        cy.contains("h3", reportName).should("be.visible")
    }

} export default MyReportsPageAssertions 