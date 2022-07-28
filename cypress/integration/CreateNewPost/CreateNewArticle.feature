Feature: Testing Post Creation

    Scenario: Test Article Creation
        Given User Sign in Website successfully
        When User Click On New Post Button
        And User Fill All The Four Fields In The Page -The Last One Is Optional-
        And User Click On The Publish Article Button
        Then Edit Article Button Should Be Shown

