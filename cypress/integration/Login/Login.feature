Feature: Testing Login

Background:
Given User Visit Login Page

Scenario: Testing the validity of the Url login page
Then Log in page will appear

Scenario: Testing Login with valid inputs
When User type in valid Email and valid password 
And User click on sign in Button
Then User login successfully

Scenario: Testing Login with invalid Email
When User type in an invalid Email and valid password 
And User click on sign in Button
Then Error massege should appear
And User should not login successfully

Scenario: Testing Login with invalid Password
When User type in valid Email and invalid password 
And User click on sign in Button
Then Error massege should appear
And User should not login successfully





