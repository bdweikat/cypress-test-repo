Feature: restaurant365 -user login 

@focus
  Scenario: R365 Login with valid email and password 
    Given I open R365 login page
    When insert username "cypressUser"
    And insert password "R3656wp"        
    And click on SignIn button
    Then "success" should include
@focus
  Scenario: R365 Login with invalid password
    Given I open R365 login page
    When insert username "cypressUser"
    And  insert password "0"        
    And  click on SignIn button
    Then "Invalid UserName or Password" should be shown 
    And "fail" should include
@focus
  Scenario: R365 Login with  empty password
    Given I open R365 login page    
    When click on SignIn button
    Then "This Field Is Required" should be shown
    And "fail" should include
@focus
  Scenario: R365 Login with invalid username
    Given I open R365 login page
    When insert username "diala23"
    And  insert password "R3656wp"        
    And  click on SignIn button
    Then "Invalid UserName or Password" should be shown 
    And "fail" should include