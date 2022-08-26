import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";

import FTSAction from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/visitFoothillSolutionWebsite/FTSwebsiteActions";
import FTSassertion from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/visitFoothillSolutionWebsite/FTSwebsiteassertions";

const FTSActions =new FTSAction();
const FTSassertions =new FTSassertion();


Given('User visit the website of Foothill Solution',()=>{
    FTSActions.visitURLWebsite();
})

 Then('Website with four tabs appear',()=>{
    FTSassertions.Hometabsappear();
    FTSassertions.Aboutusappear();
    FTSassertions.Carreersappear();
    FTSassertions.Contactusappear();
 })