Feature: Testing Foothill Solutions Website
    Background:

    Scenario: Test the visibility of Foothill Solutions Website and Facebook on Google
        Given User go to google.com
        When User search for Foothill Solutions
        And click on search button
        Then Foothill Solutions website should appear in the result page
        And Foothill Solutions facebook page should appear in the result page



    Scenario: Test the visibility of the 4 tabs (Home / About us / Careers / Contact Us) in Foothill Solutions website
        Given User go to Foothill Solutions website
        Then all the 4 buttons should appear

    Scenario: Test the validity of the Home tab in Foothill Solutions website
        Given User go to Foothill Solutions website
        When user click on Home tab
        Then home page should be opend

    Scenario: Test the validity of the About us tab in Foothill Solutions website
        Given User go to Foothill Solutions website
        When user click on About us tab
        Then About us page should be opend

    Scenario: Test the validity of the Careers tab in Foothill Solutions website
        Given User go to Foothill Solutions website
        When user click on Careers tab
        Then Careers page should be opend

    Scenario: Test the validity of the Contact Us tab in Foothill Solutions website
        Given User go to Foothill Solutions website
        When user click on Contact Us tab
        Then Contact Us page should be opend
