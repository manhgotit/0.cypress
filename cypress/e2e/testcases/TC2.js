//step 1: import LoginPageUI, HomePageUI
import LoginPageUI from '../pageUIs/LoginPageUI';
import HomePageUI from '../pageUIs/HomePageUI';
import NewBotPage from '../pageUIs/NewBotPage';
import ChatPageUI from '../pageUIs/ChatPageUI';

//step 2: create a new instance of LoginPageUI, HomePageUI class
//store it in a variable and use it in test cases
const loginPageUI = new LoginPageUI();
const homePageUI = new HomePageUI();
const newBotPage = new NewBotPage();
const chatPageUI = new ChatPageUI();

//beforeAll - run once before all test cases
//beforeEach - run before each test case
//afterEach
//afterAll



//step 3: write test suite, starting with describe
describe('Test Suite 1', function () {
    //step 4: set up beforeEach() to load data from fixture
    beforeEach(() => {
        cy.fixture('data').then(function (data) {
            //wrap loginByAPI in a function to use it in beforeEach()
            cy.loginByAPI(data.whitelisted_email, data.whitelisted_password)
            this.data = data;
        })
    })
    //step 5: write test cases, starting with it
    it('TC1 - login successfully', function () {
        //1: visit login page
        cy.visit(this.data.loginUrl);
        //2: input email
        loginPageUI.emailInput.type(this.data.whitelisted_email)
        //3: input password
        loginPageUI.passwordInput.type(this.data.whitelisted_password)
        //4: click button login
        loginPageUI.signInButton.click();
        //5: check visible element Go to bot
        cy.visit(this.data.homeBotUrl);
        homePageUI.homePageTitle.should('be.visible')
        homePageUI.goToBot.should('be.visible')
    });
    it('TC2 - create bot sucessfully', function () {
        //5: check visible element Go to bot
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
        chatPage.contactUs.should('be.visible').and('have.attr', 'style', 'height: 40px;').and('have.text', 'Contact us');
        chatPage.logout.should('be.visible');
    });
})
describe('Test Suite 2', function () {
    it.skip('TC3 - forgot password successfully', function () {
        //1: visit login page
        cy.visit(this.data.loginUrl);
        //2: input email
        loginPageUI.emailInput.type(this.data.whitelisted_email)
        //3: input password
        loginPageUI.passwordInput.type(this.data.whitelisted_password)
        //4: click button login
        loginPageUI.signInButton.click();
        //5: check visible element Go to bot
        cy.visit(this.data.homeBotUrl);
        homePageUI.homePageTitle.should('be.visible')
        homePageUI.goToBot.should('be.visible')
    });
    it.skip('TC4 - forgot password unsuccessfully', function () {
        //1: visit login page
        cy.visit(this.data.loginUrl);
        //2: input email
        loginPageUI.emailInput.type(this.data.whitelisted_email)
        //3: input password
        loginPageUI.passwordInput.type(this.data.whitelisted_password)
        //4: click button login
        loginPageUI.signInButton.click();
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
        chatPage.contactUs.should('be.visible').and('have.attr', 'style', 'height: 40px;').and('have.text', 'Contact us');
        chatPage.logout.should('be.visible');
    });
})



