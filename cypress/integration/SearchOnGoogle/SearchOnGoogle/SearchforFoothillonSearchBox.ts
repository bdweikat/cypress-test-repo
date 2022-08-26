import { Given, Then, When, After, And } from "cypress-cucumber-preprocessor/steps";
import GoogleAction from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/SearchOnGoogle/SearchOnGoogleActions";
import SearchAssertions from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/SearchOnGoogle/SearchOnGoogleAssertions";

const googleActions =new GoogleAction();
const googleAssertion =new SearchAssertions();
const Text="Foothill Solutions";

Given('User visit the Google page',()=>{
    googleActions.visitGooglepage();
})

When('User type Foothill Solution on search box',()=>{
    googleActions.TypeOnSearchBox(Text);
})

And('User Click Enter',()=>{
    googleActions.clickEnter();
})

Then('Foothill Solutions website and Facebook page show in the results',()=>{
   googleAssertion.ResultsAppear();
})