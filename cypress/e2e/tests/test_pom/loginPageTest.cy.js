//step 1: import LoginPageUI, HomePageUI
import LoginPageUI from '../../pageUIs/LoginPageUI';
import HomePageUI from '../../pageUIs/HomePageUI';
import NewBotPage from '../../pageUIs/NewBotPage';
import ChatPageUI from '../../pageUIs/ChatPageUI';
// import { it } from '@faker-js/faker';

//step 2: create a new instance of LoginPageUI, HomePageUI class
//store it in a variable and use it in test cases
const loginPageUI = new LoginPageUI();
const homePageUI = new HomePageUI();
const newBotPage = new NewBotPage();
const chatPageUI = new ChatPageUI();

//beforeEach - run before each test case

//step 3: write test suite, starting with describe
describe.skip('Test Suite 1', function () {
    //step 4: set up beforeEach() to load data from fixture
    before(function () {
        cy.fixture('data').then(function (data) {
            this.data = data;
            // Target: Bring 4 first steps and warp in 1 custom method, and call custom method in beforeEach
            cy.loginByAPI(data.loginAPIUrl_ArticleBotStaging, data.whitelisted_email, data.whitelisted_password)
            // cy.loginByUI(data.loginUrl_ArticleBotStaging, data.whitelisted_email, data.whitelisted_password)
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
        cy.visit(this.data.homeBotUrl_ArticleBotStaging);
        homePageUI.homePageTitle.should('be.visible')
        homePageUI.goToBot.should('be.visible')

        //6: create bot
        cy.visit(this.data.newBotUrl_ArticleBotStaging);
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

    it.skip('TC3 - send some messages sucessfully', function () {
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

    it.skip('TC5 - restart conversation 20 times', function () {
        cy.visit(this.data.testingBotUrl_ArticleBotStaging);

        startOverAndOver(this.data.maxNumberToStartOver)
    });


})

describe('Wait Suite', function () {
    beforeEach(function () {
        //data Global
        cy.fixture('data').then(function (data) {
            this.data = data;
            // Target: Bring 4 first steps and warp in 1 custom method, and call custom method in beforeEach
            cy.loginByAPI(data.loginAPIUrl_ArticleBotStaging, data.whitelisted_email, data.whitelisted_password)
            // cy.loginByUI(data.loginUrl_ArticleBotStaging, data.whitelisted_email, data.whitelisted_password)
        })
        cy.generateFakeData()

        cy.fixture('type').then((type) => {
            this.type = type
        })
    })

    it.skip('Stop Generation', function () {
        cy.visit(this.data.testingBotUrl_ArticleBotStaging);

        //send first message
        chatPageUI.writeMessage.type("Thanks");
        cy.get(`[data-testid="send-message-button"] > svg`).click()
        // cy.get(`.u-flex.u-flexColumn.u-flexGapLarge`).last().should('be.visible')
        cy.get(`div[class='u-flex u-flexColumn u-flexGapLarge'] div[class='u-flex u-justifyContentBetween u-alignItemsCenter']`).last().should('exist')
        // cy.get(`[data-testid="truth-checker-component"] > svg`).should('exist')
        cy.get(`[data-testid="stop-responding-button"]`).click()

    })

    it.skip('Wait TC', function () {
        cy.visit(this.data.testingBotUrl_ArticleBotStaging);

        chatPageUI.writeMessage.type("Thanks");

        //wait for bottom Logo appears to make sure the page is loaded completely
        // cy.get(`img[alt='Powered by Got It, Inc.']`).should('be.visible')

        //start writing TC here

        //wait for invisible state of start-over button to be disappear
        // cy.get(`.u-cursorDefault`).should('not.exist')

        // //wait for visible state of start-over button to be appear and click on it
        // cy.get(`div[data-name='start-over']`).click()

        // //wait for Confirmation modal appears
        // cy.get(`.u-shadowMedium`).should('be.visible')

        // //click on Confirm to start-over button
        // cy.get(`.CustomButton`).first().click()

    });

    it.skip('edit bot', function () {
        cy.visit(`https://articlebot.got-it.ai/bots/gotitapphelp-zendesk-com-categories-18439470575385-refund-my-money-648/edit`);

    })

    it.skip('type', function () {
        for (var index in this.type) {
            cy.visit(`https://articlebot.got-it.ai/bots/gotitapphelp-zendesk-com-categories-18439470575385-refund-my-money-648`);
            cy.get(`[data-testid="composer"]`).type(this.type[index].name)
            cy.get(`[data-testid="send-message-button"]`).click()
            cy.get(`[data-testid="send-message-loading-icon"]`).should('be.visible')
        }
    })

    it('typeRead', function () {
        //cach 2: local fixture
        cy.fixture('dataLocal').then(function (dataLocal) {
            cy.loginByAPI(dataLocal.loginAPIUrl_ArticleBotStaging, dataLocal.whitelisted_email, dataLocal.whitelisted_password)
        })

        // //cach 1: local
        // cy.readFile('cypress/fixtures/typeRead.json').then(Shinobi => {
        //     for (var index in Shinobi) {
        //         cy.visit(`https://articlebot.got-it.ai/bots/gotitapphelp-zendesk-com-categories-18439470575385-refund-my-money-707`);
        //         cy.get(`[data-testid="composer"]`).clear().type(Shinobi[index].name)
        //         cy.get(`[data-testid="send-message-button"]`).click()
        //         cy.get(`[data-testid="send-message-loading-icon"]`).should('be.visible')
        //     }
        // })

        // //cach 2: global
        // for (var index in this.type) {
        //     // cy.log(this.type[index].name)
        //     cy.visit(`https://articlebot.got-it.ai/bots/gotitapphelp-zendesk-com-categories-18439470575385-refund-my-money-648`);
        //     cy.get(`[data-testid="composer"]`).type(this.type[index].name)
        //     cy.get(`[data-testid="send-message-button"]`).click()
        //     cy.get(`[data-testid="send-message-loading-icon"]`).should('be.visible')
        // }
    })

})