Feature: Testing Signup

    Scenario: Test Signup Page
        Given User Open Signup Page
        When User Type Username , Email and Password
        And User Click On The Sign in Button
        Then User Feed Should Be Shown
