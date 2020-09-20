import {Given,When,Then} from "cypress-cucumber-preprocessor/steps";
import R365Apis from "../../objectsFile/APIs";
import { contains, when } from "cypress/types/jquery";
import  LoginPageActions  from "../../objectsFile/loginActions";
import  LoginPageAssertions  from "../../objectsFile/loginAssertions";
import { userInfo } from "os";


const R365Api=new R365Apis();
Given ("open create user page",()=>{
    R365Api.createR365User({ userFullName:'test34',
        userLoginName:'test343',
        userPassword:'pass343',
        userLocation:'746cfd04-0de5-e711-93ff-0cc47abcc4a5',
        userNumber:'1234567765',
        userEmail:'test34@gmail.com'});


})


const loginPageActions = new LoginPageActions();
const loginPageAssertions=new LoginPageAssertions();

Given('I open R365 login page', () => {
  loginPageActions.openR365LoginPage();
  });
 
  When('Insert username {string}', (content) => { 
    loginPageActions.fillUsernameField(content);
  });
  When('Insert password {string}', (content) => { 
    loginPageActions.fillPasswordField(content);
});
 
  When('Click on SignIn button', () => {
    loginPageActions.clickOnSigninButton();
    cy.wait(10000);
  });
  
  Then('Error message {string} should display', (content) => {
    loginPageAssertions.CheckErrorMessageIsDisplay(content);

  });
  
  Then('HomePage {string} open', (content)=>{
    if(content=="shouldnt"){
    loginPageAssertions.checkHomePageIsOpen(false);}
    else if(content =="should"){
    loginPageAssertions.checkHomePageIsOpen(true);
    }
   
  });
  
