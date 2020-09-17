
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LogInPageAssertions from "@pageObjects/LogInPage/assertions";
import LogInPageActions from "@pageObjects/LogInPage/actions";
import MyReportsActions from "@pageObjects/ReportsPage/actions";
import MyReportsPageAssertions from "@pageObjects/ReportsPage/myReportAssertions";

const myReportsActions = new MyReportsActions()
const loginActions = new LogInPageActions()
const loginAssertions = new LogInPageAssertions()
const myReportsPageAssertions = new MyReportsPageAssertions()


Given("The user opens login page", () => {
    loginActions.openLoginPage()

})

Given("Types in user name input field", () => {
    loginActions.tpyeInUsernameInputField('cypressUser')
})

Given("Types in user password input field", () => {

    loginActions.typeInPasswordInputField('R3656wp')
})

When('Clicks on the Sign In button', () => {
    loginActions.clickOnSignInButton()
    cy.wait(10000);
})

Then('Home page should be open', () => {
    loginAssertions.checkHomePageIsOpen("CypressUser")
})

Given("The user opens My Report Page", () => {
    myReportsActions.openMyReportsPage()

})

Given("Types in report title in search field", () => {
    myReportsActions.tpyeInReportSearchInputField('Flash ')
})

When('The user type enter', () => {
    myReportsActions.clickEnterForSearch()
    cy.wait(10000);
})

Given('Click on Ok button', () => {
    myReportsActions.clickOnOkButton()
    cy.wait(10000);
})

Then('Report title should be listed in the results', () => {
    myReportsPageAssertions.checkReporttitleIsListed()
})
