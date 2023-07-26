const CONTACT_US = '[data-testid="button-contact-us"]';
const LOG_OUT = '[data-testid="logout-button"]';
const WRITE_MESSAGE = '[data-testid="composer"]';

export default class ChatPageUI {
    get getUrl() {
        return cy.url();
    }
    get contactUs() {
        return cy.get(CONTACT_US);
    }
    get logout() {
        return cy.get(LOG_OUT);
    }
    get writeMessage() {
        return cy.get(WRITE_MESSAGE);
    }
}
