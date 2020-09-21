import {Given,When,Then} from "cypress-cucumber-preprocessor/steps";
import R365Apis from "../../objectsFile/APIs";
import { contains, when } from "cypress/types/jquery";
import  LoginPageActions  from "../../objectsFile/loginActions";
import  LoginPageAssertions  from "../../objectsFile/loginAssertions";
import { userInfo } from "os";


const loginPageActions = new LoginPageActions();
const loginPageAssertions=new LoginPageAssertions();
const r365Api=new R365Apis();
let userId:string;
let vall:string;

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
  Then ("create user using API",()=>{
    r365Api.createR365User({ userFullName:'usertestd',
        userLoginName:'usertestd',
        userPassword:'pass343',
        userLocation:'746cfd04-0de5-e711-93ff-0cc47abcc4a5',
        userNumber:'1234567765',
        userEmail:'usertestd@gmail.com'}).then(id=>{
            userId=id;
        });


});

