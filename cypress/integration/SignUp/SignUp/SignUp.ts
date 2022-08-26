import { Given, Then, When, After, And } from "cypress-cucumber-preprocessor/steps";
import Signupassertions from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/SignUp/signupassertion";
import SignupActions from "C:/Users/dell/Desktop/cypress-test-repo/cypress/PageObject/SignUp/signupActions";


const signupaction = new SignupActions();
const signupassertions = new Signupassertions();
const UserName="Tala subu";
const Email = "tala_subu@yahoo.com";
const pass = "11715040";

Given('I Open Sign Up Page',()=>{
   signupaction.visitsignup();
});

When('I type in username and email and password',()=>{
    signupaction.FillUserName(UserName);
    signupaction.FillEmail(Email);
    signupaction.FillPassword(pass);
});

And('I click on sign in Button',()=>{
    signupaction.clicksignin();
})
Then('Your Feed should be shown',()=>{
    signupassertions.successfullsignup();
});
