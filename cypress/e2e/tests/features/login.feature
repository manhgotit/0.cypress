#BA, PM, Manual QA, QC will use this file to write manual test cases

Feature: Login App

# Scenario: TC1: Login successfully with valid credentials
# Given I visit the login page
# When I enter valid username and password
# When I click on login button
# Then I'm logged in successfully

Scenario: TC2: Login unsuccessfully with invalid credentials
Given I visit the login page
# When I enter invalid username or password
Then I enter invalid username or password, I should see error message
# Then I should see error message
# When I click on login button
# Then I should receive an error message