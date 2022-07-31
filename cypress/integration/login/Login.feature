Feature: Testing Login
    Background:
        Given User Open Login Page

    Scenario: Test Login Page With Valid Inputs
        When User Enter A valid Email And Password
        And User Click On Sign in Button
        Then User Login Successfully

    Scenario: Test Login Page With Blank Feilds
        When  the email field is blank
        And  Signin Button Is Clicked
        Then User can't login immediately
        When the password field is blank
        And  Signin Button Is Clicked
        Then User can't login immediately