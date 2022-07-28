Feature: Testing Login

    Scenario: Test Login Page
        Given User Open Login Page
        When User Enter An Exist Email And Password
        And User Click On Sign in Button
        Then User Feed Should Be Shown