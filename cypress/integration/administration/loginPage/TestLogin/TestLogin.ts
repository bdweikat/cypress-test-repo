import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Actions from "../../../../pageObjects/actions";
import Assertions from '../../../../pageObjects/assertions';

const loginActions = new Actions()
const loginAssertions = new Assertions()

Given("The user opens login page", () => {
    loginActions.openLoginPage()
})

Given("Types in user name input field", () => {
    loginActions.tpyeInUsernameInputField()
})

Given("Types in user password input field", () => {

    loginActions.typeInPasswordInputField()
})

Given("Types in invalid user name input field", () => {

    loginActions.typeInInvalidUserNameInputField()
})

Given("Types in invalid password input field", () => {

    loginActions.typeInInvalidPasswordInputField()
})

When('Clicks on the Sign In button', () => {
    loginActions.clickOnSignInButton()
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

