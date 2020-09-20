Feature: Restaurant365 -user login 


  Scenario: R365 Login with valid email and password 
    Given I open R365 login page
    When Insert username "cypressUser"
    And Insert password "R3656wp"        
    And Click on SignIn button
    Then HomePage "should" open

  Scenario: R365 Login with invalid password
    Given I open R365 login page
    When Insert username "cypressUser"
    And  Insert password "0"        
    And  Click on SignIn button
    Then Error message "Invalid UserName or Password" should display  
    And HomePage "shouldnt" open

  Scenario: R365 Login with  empty password
    Given I open R365 login page    
    When Click on SignIn button
    Then Error message "This Field Is Required" should display
    And HomePage "shouldnt" open

  Scenario: R365 Login with invalid username
    Given I open R365 login page
    When Insert username "diala23"
    And  Insert password "R3656wp"        
    And  Click on SignIn button
    Then Error message "Invalid UserName or Password" should display
    And HomePage "shouldnt" open