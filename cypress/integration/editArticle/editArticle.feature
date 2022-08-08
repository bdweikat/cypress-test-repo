Feature: Testing Edit Article



    Scenario: Test the validity of the Editor page url
        Given click on the article title button
        When user click on edit article button
        Then the editor page will appear



    Scenario: Test The Visibility of all the fields in the Editor page
        Given click on edit article button
        Then User will see all components of the page


    Scenario: Test Title Field Modification
        Given User choose article to modify
        When modify the title of the article
        Then the title will be changed

    Scenario: Test Idea Field Modification
        Given User choose article to modify
        When modify the idea of the article
        Then the modified Idea will appear

    Scenario: Test Body Field Modification
        Given User choose article to modify
        When user modify the Body of the article
        Then the Body will be changed


















