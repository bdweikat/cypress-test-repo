Feature: Testing Sign Up 

Scenario: Condiut Sign up
Given I Open Sign Up Page 
When I type in username and email and password
And I click on sign in Button
Then Your Feed should be shown
