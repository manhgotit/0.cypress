//Step 1: Using css selector to find elements on each page
const HOME_PAGE_TITLE = `.Title`;
const GO_TO_BOT = `Go to bot`;

export default class HomePageUI {
    get homePageTitle() {
        return cy.get(HOME_PAGE_TITLE);
    }
    get goToBot() {
        return cy.contains(GO_TO_BOT);
    }
}
