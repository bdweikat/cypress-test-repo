import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sortableActions from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/Sortablejs/sortablejsactions";
import sortableassertion from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/Sortablejs/sortableassertions";


const sortableAction =new sortableActions();
const sortableassertions =new sortableassertion();

Given('User open Sortablejs',()=>{
    sortableAction.openURL();
})
When('User check the list if sorted',()=>{
    sortableassertions.CheckListSize();
})
 Then('User Show That the list should be sorted',()=>{
    sortableassertions.checkListItems();
 })