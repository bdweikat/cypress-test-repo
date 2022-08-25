Feature: Testing Post Creation
    Background:

    Scenario: Test the validity of the createPost page url
        Given User Sign in Website
        When User click on create Post Button
        Then the ceratePost page will appear



    Scenario: Test Article Creation

        Given User gotocreate post page
        When User Fill All The Fields In The Page
        And User Click On The Publish Article Button
        Then New Post will be published


    Scenario: Test Empty Title Creation

        Given User go to the article page
        When The Title field is empty
        And User click on publish article button
        Then Title error message should be shown



    Scenario: Test Empty Idea Creation

        Given User go to the article page
        When The Idea field is empty
        And User click on publish article button
        Then Idea error message should be shown

    Scenario: Test Empty Body Creation

        Given User go to the article page
        When The Body field is empty
        And User click on publish article button
        Then Body error message should be shown


    Scenario: Test Empty Tags Creation

        Given User go to the article page
        When The Tags field is empty
        And User click on publish article button
        Then Tags error message should be shown


    Scenario: Test Used Title Creation

        Given User go to the article page
        When User enter a used title
        And User click on publish article button
        Then Used title error message should be shown

