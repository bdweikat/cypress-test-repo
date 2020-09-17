Feature: My Reports search page, and search for an item

    Scenario: Verify Report name should be listed in My Reports when enter Report name
        Given The user opens login page
        And Types in user name input field
        And Types in user password input field
        When Clicks on the Sign In button
        Then Home page should be open
        Given The user opens My Report Page
        And Click on Ok button
        When Types in report title in search field
        Then Report title should be listed in the results



