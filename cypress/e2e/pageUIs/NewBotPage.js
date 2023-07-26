const NEXT = '.Button > .u-text200';
const ZENDESK_URL_INPUT = '#zendeskGuideUrl';
const DEPLOY_BOT = '.Button--primary';
const GO_BACK = '.Button--secondary';

export default class NewBotPage {
    get getUrl() {
        return cy.url();
    }
    get next() {
        return cy.get(NEXT);
    }
    get zendeskUrlInput() {
        return cy.get(ZENDESK_URL_INPUT);
    }
    get deployBot() {
        return cy.get(DEPLOY_BOT);
    }
    get goBack() {
        return cy.get(GO_BACK);
    }
}
