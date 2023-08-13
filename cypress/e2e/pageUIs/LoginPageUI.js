//Step 1: Using css selector to find elements on each page
const LOGO = `div[class='Header u-hidden sm:u-block'] img[alt='Got It AI']`;
const SIGN_IN_TITLE = '.Title';
const EMAIL_INPUT = '#email';
const PASSWORD_INPUT = '#password';
const SIGN_IN_BUTTON = '.u-marginTopMedium';
const SIGN_IN_GOOGLE_BUTTON = `button[data-testid='google-button-sign-in']`;
// const ERROR_MESSAGE_1 = `div[role='alert']`;
const ERROR_MESSAGE_1 = `div[class='FormGroup u-block u-marginBottomSmall u-marginBottomSmall'] div[role='alert']`;
const ERROR_MESSAGE_2 = `div[class='FormGroup u-block u-marginBottomSmall u-marginBottomMedium'] div[role='alert']`;

//Step 2: Create a class to store all elements on each page, and export it to use in test cases level
export default class LoginPageUI {
    //Step 3: Create methods to interact with elements on each page in test case level
    get logo() {
        //Step 4: Return elements - using getter
        return cy.get(LOGO);
    }
    get signInTitle() {
        return cy.get(SIGN_IN_TITLE);
    }
    get emailInput() {
        return cy.get(EMAIL_INPUT);
    }
    get passwordInput() {
        return cy.get(PASSWORD_INPUT);
    }
    get signInButton() {
        return cy.get(SIGN_IN_BUTTON);
    }
    get signInGoogleButton() {
        return cy.get(SIGN_IN_GOOGLE_BUTTON);
    }
    get errorMessage1() {
        return cy.get(ERROR_MESSAGE_1);
    }
    get errorMessage2() {
        return cy.get(ERROR_MESSAGE_2);
    }
}
