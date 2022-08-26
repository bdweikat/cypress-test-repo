import { Given, Then, When, After, And } from "cypress-cucumber-preprocessor/steps";
import GoogleAction from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/SearchOnGoogle/SearchOnGoogleActions";
import SearchAssertions from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/SearchOnGoogle/SearchOnGoogleAssertions";

const googleActions =new GoogleAction();
const googleAssertion =new SearchAssertions();

Given('User visit the Google page',()=>{
    googleActions.visitGooglepage();
})
Then('Google page will appear',()=>{
   googleAssertion.validityURL();
})
