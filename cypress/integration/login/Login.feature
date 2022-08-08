Feature: Testing Login

    Background:
        Given User Open Login Page


    Scenario: Test the validity of the login page url
        Then the login page will appear


    Scenario: Test The Visibility of all the fields in the login page

        Then User see all components of the page


    Scenario: Test Login Page With Valid Inputs
        When User Enter A valid Email and valid password
        And User Click On Sign in Button
        Then User Login Successfully


    Scenario: Test Login Page With InValid Email
        When User Enter invalid Email and valid password
        And User Click On Sign in Button
        Then Error messagee should show
        And User should not be able to loginn

    Scenario: Test Login Page With InValid Password
        When User Enter invalid Password and valid email
        And User Click On Sign in Button
        Then Error messagge should show
        And User should not be ablee to login

    Scenario: Test Login Page With Empty Email
        When  the email field is empty
        And  Signin Button Is Clicked
        Then Errorr message should show
        And User should nott be able to login

    Scenario: Test Login Page With Empty Password
        When the password field is empty
        And  Signin Button Is Clicked
        Then Erroor message should showw
        And User shouldd not be able to login

    Scenario: Test NeedAnAccount Button
        When  User Click on NeedAnAccount Button
        Then It open SignUp Page