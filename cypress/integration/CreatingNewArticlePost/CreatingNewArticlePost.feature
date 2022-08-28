Feature: Testing Creating New Article Post from Form

Background:
Given User click on new post button

Scenario:Testing click on new post button
Then form of publish article with four fields appear

Scenario: Testing publish Article with Enter all inputs of form
When User Enter Article Title and Description and Body and tags inputs
And User click on Publish Article Button
Then Article published successfully

Scenario: Testing publish article without Enter title article
When User Enter Description and body and tags inputs without enter the title
And User click on Publish Article Button
Then Error massege because of blank title appear
And Article Should not published successfully

Scenario: Testing publish article without Enter Description
When User Enter Article Title and body and tags inputs without enter the Description
And User click on Publish Article Button
Then Error massege because of blank description appear 
And Article Should not published successfully

Scenario: Testing publish article without Enter body
When User Enter Article Title and Description and tags inputs without enter the body
And User click on Publish Article Button
Then Error massege because of blank body appear 
And Article Should not published successfully

Scenario: Testing publish Article with frequent Title
When User Enter frequent Article Title and Description and Body and tags inputs
And User click on Publish Article Button
Then Error massege because of frequent Article Title appear
And Article Should not published successfully 




