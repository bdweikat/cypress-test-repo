Feature: Testing Post Creation

    Scenario: Test Article Creation
        Given User Sign in Website successfully
        When User Click On New Post Button
        * User Fill All The Four Fields In The Page
        * User Click On The Publish Article Button
        Then New Post will be published

