Feature: Testing SignUp Page

    Background:
        Given User Open SignUp Page


    Scenario: Test the validity of the SignUp page url
        Then the SignUp page will appear


    Scenario: Test The Visibility of all the fields in the SignUp page

        Then User see all components of the page


    Scenario: Test SignUp Page With Valid Format Inputs
        When User Enter A valid UserName,Email and password
        And User Click On Sign in Button
        Then User SignUp Successfully


    Scenario: Test SignUp Page With InValid Format Email
        When User Enter invalid Email
        And User Click On Sign in Button
        Then User should not be able to SignUp



    Scenario: Test SignUp Page With Empty Username
        When the username field is empty
        And  Signin Button Is Clicked
        Then Username Error message should show
        And User should not be able to SignUp


    Scenario: Test SignUp Page With Empty Email
        When  the email field is empty
        And  Signin Button Is Clicked
        Then EmailError message should show
        And User should not be able to SignUp


    Scenario: Test SignUp Page With Empty Password
        When the password field is empty
        And  Signin Button Is Clicked
        Then PasswordError message should show
        And User should not be able to SignUp


    Scenario: Test SignUp Page With Used Username
        When User enter a used username
        And  Signin Button Is Clicked
        Then UsedUsernameError message should show
        And User should not be able to SignUp


    Scenario: Test SignUp Page With Used Email
        When User enter a used Email
        And  Signin Button Is Clicked
        Then UsedEmailError message should show
        And User should not be able to SignUp


    Scenario: Test SignUp Page With Used Email & Password
        When User enter a used Email and Password
        And  Signin Button Is Clicked
        Then EmailuError message should show
        * PassworduError message should show
        * User should not be able to SignUp

    Scenario: Test HaveAnAccount Button
        When User Click on HaveAnAccount Button
        Then It open Login Page


