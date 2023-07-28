//step 1: import LoginPageUI, HomePageUI
import LoginPageUI from '../pageUIs/LoginPageUI';
import HomePageUI from '../pageUIs/HomePageUI';
import NewBotPage from '../pageUIs/NewBotPage';
import ChatPageUI from '../pageUIs/ChatPageUI';
// import { it } from '@faker-js/faker';

//step 2: create a new instance of LoginPageUI, HomePageUI class
//store it in a variable and use it in test cases
const loginPageUI = new LoginPageUI();
const homePageUI = new HomePageUI();
const newBotPage = new NewBotPage();
const chatPageUI = new ChatPageUI();

//beforeEach - run before each test case

//step 3: write test suite, starting with describe
describe('Test Suite 1', function() {
    //step 4: set up beforeEach() to load data from fixture
    beforeEach(function () {
        cy.fixture('data').then(function(data) {
            this.data = data;
            // Target: Bring 4 first steps and warp in 1 custom method, and call custom method in beforeEach
            cy.loginByAPI(data.loginAPIUrl, data.whitelisted_email, data.whitelisted_password)
            // cy.loginByUI(data.loginUrl, data.whitelisted_email, data.whitelisted_password)
        })
        cy.generateFakeData()
    })

    //step 5: write test cases, starting with it
    it.skip('TC1 - login successfully', function () {
        //5: check visible element Go to bot
        cy.visit(this.data.homeBotUrl);
        homePageUI.homePageTitle.should('be.visible')
        homePageUI.goToBot.should('be.visible')
    });
    it.skip('TC2 - create bot sucessfully', function () {
        // //5: check visible element Go to bot
        cy.visit(this.data.homeBotUrl);
        homePageUI.homePageTitle.should('be.visible')
        homePageUI.goToBot.should('be.visible')

        //6: create bot
        cy.visit(this.data.newBotUrl);
        //At new bot page
        //7: click button Next
        newBotPage.next.click();
        //8: input Zendesk url
        newBotPage.zendeskUrlInput.type(this.data.zendeskShortUrl);
        //9: click button Deploy
        newBotPage.deployBot.click();

        //At chat page
        //10: check bot is created at chatpage
        chatPageUI.contactUs.should('be.visible').and('have.attr', 'style', 'height: 40px;').and('have.text', 'Contact us');
        chatPageUI.logout.should('be.visible');

    });

    it('TC3 - send some messages sucessfully', function () {
        cy.visit(this.data.testingBotUrl);

        //send first message
        chatPageUI.writeMessage.type("Thanks");
        chatPageUI.sendMessage.click();
        chatPageUI.truthCheckerResult.should('be.visible');
        chatPageUI.showRelatedContentButton.click();
        chatPageUI.articleItem.should('have.length.above', 0);

        //send second message
        chatPageUI.writeMessage.type("Hello");
        chatPageUI.sendMessage.click();
        chatPageUI.showRelatedContentButton.last().click();
        chatPageUI.articleItem.last().click();
        cy.contains('There are no relevant articles.').should('be.exist')
        
    })
    it.skip('TC4 - Verify Contact Button successfully', function () {
        /* ==== Generated with Cypress Studio ==== */
        // cy.visit(this.data.abc);
        cy.get().click();
        cy.get('.u-marginTopSmall > .FormInput').clear('m');
        cy.get('.u-marginTopSmall > .FormInput').type('manh');
        cy.get(':nth-child(2) > .FormInput').clear('m');
        cy.get(':nth-child(2) > .FormInput').type('manhtt@topcv.vn');
        cy.get(':nth-child(2) > .FormInput').click();
        cy.get(':nth-child(3) > .FormInput').click();
        cy.get('.CustomButton').click();
        cy.get('[fill="#D1FADF"]').should('be.visible');
        cy.get('.Modal-header > .u-backgroundWhite').click();
        cy.get('.Modal-header > .u-backgroundWhite').click();
        cy.get('.Modal-header > .u-backgroundWhite').click();
        cy.get('.Modal-header > .u-backgroundWhite').should('be.visible');
        cy.get('.Modal-body > .u-roundedMedium').click();
        cy.get('.Modal-body > .u-roundedMedium').click();
        cy.get('.Modal-body > .u-roundedMedium').click();
        cy.get('.Modal-body > .u-roundedMedium').should('be.visible');
        cy.get('.Modal-body > .u-roundedMedium').click();
        cy.get('[data-testid="close-button-icon"]').click();
        /* ==== End Cypress Studio ==== */
    })
    
})



