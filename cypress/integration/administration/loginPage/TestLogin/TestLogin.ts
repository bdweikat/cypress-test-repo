import CreateNewUserAPIRequest from "@pageObjects/creatnewuser";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LogInPageActions from "../../../../pageObjects/actions";
import LogInPageAssertions from '../../../../pageObjects/assertions';


const createUser = new CreateNewUserAPIRequest()
const loginActions = new LogInPageActions()
const loginAssertions = new LogInPageAssertions()

Given("The system has a user", () => {
    createUser.createNewUser('sondos alzain2', 'sondos2', 'Soso@591995', 'sondos@testtest.com')
})

Given("The user opens login page", () => {
    loginActions.openLoginPage()
    cy.wait(10000)
})

Given("Types in user name input field", () => {
    loginActions.tpyeInUsernameInputField('cypressUser')
})

Given("Types in user password input field", () => {

    loginActions.typeInPasswordInputField('R3656wp')
})

Given("Types in invalid user name input field", () => {

    loginActions.tpyeInUsernameInputField('sondos')
})

Given("Types in invalid password input field", () => {

    loginActions.typeInPasswordInputField('ggggggg')
})

When('Clicks on the Sign In button', () => {
    loginActions.clickOnSignInButton()
    cy.wait(10000);
})

Then('Home page should be open', () => {
    loginAssertions.checkHomePageIsOpen()
})

Then('Error message should be visible Please fill in this field', () => {
    loginAssertions.checkValidationMessageIsVisible()
})

Then('Shuold see pop up error message Invalid UserNmae Or Password', () => {
    loginAssertions.checkInvalidUserNameOrPasswprd()
})



