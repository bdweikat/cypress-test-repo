class MyReportsActions {
    openMyReportsPage() {
        cy.visit(Cypress.config("baseUrl") + "#/grid/MyReportsGrid/00000000-0000-0000-0000-000000000000?Reference=leftPanel")
        cy.wait(10000)
    }

    tpyeInReportSearchInputField(reporttitle: string) {
        return cy.get('input[id=input_0]').type(reporttitle)
    }

    clickOnOkButton() {

        cy.contains('OK').click()
    }

    clickEnterForSearch() {
        cy.get('md_icon[aria-label="menu"]').click()
    }
} export default MyReportsActions