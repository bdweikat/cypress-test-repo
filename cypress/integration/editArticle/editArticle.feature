Feature: Testing Edit Article

    Background:
        Given user click on edit article button

    Scenario: Test the validity of the Editor page url

        Then the editor page will appear



    Scenario: Test The Visibility of all the fields in the Editor page

        Then User will see all components of the page


    Scenario: Test Title Field Modification

        When modify the title of the article
        Then the title will be changed

    Scenario: Test Idea Field Modification

        When modify the idea of the article
        Then the modified Idea will appear

    Scenario: Test Body Field Modification

        When user modify the Body of the article
        Then the Body will be changed


















