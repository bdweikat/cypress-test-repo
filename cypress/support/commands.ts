import "@testing-library/cypress/add-commands";
import "cypress-file-upload";
import "cypress-wait-until";
import loginassertions from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/Login/loginassertions";
import loginActions from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/Login/loginActions";

import GoogleAction from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/SearchOnGoogle/SearchOnGoogleActions";
import SearchAssertions from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/SearchOnGoogle/SearchOnGoogleAssertions";

const googleActions =new GoogleAction();
const googleAssertion =new SearchAssertions();
const loginAction = new loginActions();
const loginAssertion = new loginassertions();
/*const Email="danahmooda@gmail.com";
const password="11715040";*/


declare global {
    namespace Cypress {
        interface Chainable { Login(Email,password);
        }

    }
}

Cypress.Commands.add('Login',(Email,password)=>{
    loginAction.visitloginpage();
    loginAction.FillEmail(Email);
    loginAction.FillPassword(password);
    loginAction.clicksigninbtn();
    loginAssertion.successfullylogin();
})


