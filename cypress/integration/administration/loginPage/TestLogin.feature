Feature: Login Page

    Scenario: verify the  home page should be open when enter correct username and password
        Given The user opens login page
        And Types in user name input field
        And Types in user password input field
        When Clicks on the Sign In button
        Then Home page should be open

    Scenario: verify that error message should appear when leave userID field empty and click on Sign In button
        Given The user opens login page
        And Types in user password input field
        When Clicks on the Sign In button
        Then Error message should be visible Please fill in this field

    Scenario: verify that error message should appear when leave password field empty and click on Sign In button
        Given The user opens login page
        And Types in user name input field
        When Clicks on the Sign In button
        Then Error message should be visible Please fill in this field

    Scenario: verify that error message should appear when inter invalid user password
        Given The user opens login page
        And Types in user name input field
        And Types in invalid password input field
        When Clicks on the Sign In button
        Then Shuold see pop up error message Invalid UserNmae Or Password

    Scenario: verify that error message should appear when leave userID and password field empty and click on Sign In button
        Given The user opens login page
        When Clicks on the Sign In button
        Then Error message should be visible Please fill in this field
