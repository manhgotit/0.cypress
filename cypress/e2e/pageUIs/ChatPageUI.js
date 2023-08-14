const CONTACT_US = '[data-testid="button-contact-us"]';
const LOG_OUT = '[data-testid="logout-button"]';
const WRITE_MESSAGE = '[data-testid="composer"]';
const SEND_MESSAGE = `[data-testid="send-message-button"]`;
const TRUTH_CHECKER_RESULT = `.u-paddingLeftExtraSmall`;
const SHOW_RELATED_CONTENT_BUTTON = `[data-testid="show-related-content-button"]`;
const RELEVANT_ARTICLES = `h2`;
const ARTICLE_ITEM = `[data-testid="article-item"]`;

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
    get sendMessage() {
        return cy.get(SEND_MESSAGE);
    }
    get truthCheckerResult() {
        return cy.get(TRUTH_CHECKER_RESULT);
    }
    get showRelatedContentButton() {
        return cy.get(SHOW_RELATED_CONTENT_BUTTON);
    }
    get relevantArticles() {
        return cy.get(RELEVANT_ARTICLES);
    }
    get articleItem() {
        return cy.get(ARTICLE_ITEM);
    }

}
