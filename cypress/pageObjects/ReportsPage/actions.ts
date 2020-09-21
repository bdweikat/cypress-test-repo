class MyReportsActions {
    openMyReportsPage() {
        cy.visit(Cypress.config("baseUrl") + "#/grid/MyReportsGrid/00000000-0000-0000-0000-000000000000?Reference=leftPanel")
        cy.wait(10000)
    }

    tpyeInReportSearchInputField(reporttitle: string) {
        cy.get('input[id=input_0]').type(reporttitle)
        return this
    }

    clickOnOkButton() {

        cy.contains('OK').click()
    }

} export default MyReportsActions