//Automation, DEV will use this file to transfer manual test cases to automation test cases
import { Before, After, Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

import LoginPageUI from '../../pageUIs/LoginPageUI';
const loginPageUI = new LoginPageUI();

Given(`I visit the login page`, function () {
  //way 1: use data global defined in before hook using this.data....
  cy.visit(this.data.loginUrl_ArticleBotStaging)
})

When(`I enter valid username and password`, function () {
  cy.fixture('data').then(function (data) {
    //way 2: data local - use in this step only
    //no need this.data, only data is enough
    loginPageUI.emailInput.type(data.whitelisted_email)
    loginPageUI.passwordInput.type(data.whitelisted_password)
  })
})

When(`I click on login button`, function () {
  loginPageUI.signInButton.click()
})

Then(`I'm logged in successfully`, function () {
  cy.contains('Welcome to Article Bot').should('be.visible')
})

Then(`I enter invalid username or password, I should see error message`, function () {
  // way 1
  for (var index in this.invalidLogin) {
    loginPageUI.emailInput.clear();
    loginPageUI.emailInput.type(this.invalidLogin[index].email);
    loginPageUI.passwordInput.clear();
    // loginPageUI.passwordInput.type(this.invalidLogin[index].password);

    if (this.invalidLogin[index].errorMessage1 && this.invalidLogin[index].errorMessage2) {
      loginPageUI.errorMessage1.should('include.text', this.invalidLogin[index].errorMessage1)
      loginPageUI.errorMessage2.should('include.text', this.invalidLogin[index].errorMessage2)
    }
    else if (this.invalidLogin[index].errorMessage1) {
      loginPageUI.errorMessage1.should('include.text', this.invalidLogin[index].errorMessage1)
    }
    else if (this.invalidLogin[index].errorMessage2) {
      loginPageUI.errorMessage2.should('include.text', this.invalidLogin[index].errorMessage2)
    }
    else {
      cy.log('There is no error message')
    }

  }

  /* way 2:
  cy.fixture('invalidLogin').then((user) => {
    user.forEach(elm => {
      loginPageUI.emailInput.clear();
      loginPageUI.emailInput.type(elm.email);
      loginPageUI.passwordInput.clear();
      // loginPageUI.passwordInput.type(elm.password);

      if (this.invalidLogin[index].errorMessage1 && this.invalidLogin[index].errorMessage2) {
      loginPageUI.errorMessage1.should('include.text', this.invalidLogin[index].errorMessage1)
      loginPageUI.errorMessage2.should('include.text', this.invalidLogin[index].errorMessage2)
    }
    else if (this.invalidLogin[index].errorMessage1) {
      loginPageUI.errorMessage1.should('include.text', this.invalidLogin[index].errorMessage1)
    }
    else if (this.invalidLogin[index].errorMessage2) {
      loginPageUI.errorMessage2.should('include.text', this.invalidLogin[index].errorMessage2)
    }
    else {
      cy.log('There is no error message')
    }
    })
  })
*/
})

