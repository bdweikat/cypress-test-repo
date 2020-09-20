Feature: Restaurant365 -create user 
Create R365 user using request API



Scenario: create R365 user
 Given I open R365 login page
 When Insert username "cypressUser"
 And Insert password "R3656wp"        
 And Click on SignIn button
 Then create user using API
