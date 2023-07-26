// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginByUI', (url, email, password) => {
    cy.session([email, password], () => {
        cy.visit(url)
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get(`[type='submit']`).click()
        //verify login successfully
        cy.contains('Welcome to Article Bot').should('be.visible')
    })
})

Cypress.Commands.add('loginByAPI', (url, email, password) => {
    cy.session([email, password], () => {
        //step 1: send request to get token
        cy.request({
            url: url,
            method: 'POST',
            headers: {
                contentType: "application/json",
            },
            body: { "email": email, "password": password }
            //step 2: then save token to local storage
        }).then(res => {
            window.localStorage.setItem('questionable-portal.demo.demo-auth', `{"accessToken":"${res.body.access_token}"}`);

            //step 3 (optional): create a new file to store data
            const filename1 = 'cypress/fixtures/dataFake.json'
            const authorization = `Bearer ${res.body.access_token}`;
            cy.writeFile(filename1, {
                'authorization': authorization
            })
        })
    })
})

Cypress.Commands.add('loginByAPI_full', (email, password) => {
    cy.session([email, password], () => {
        //step 1: send request to get token
        cy.request({
            url: 'https://questionable-api-googleperf-staging.bot-got-it.tech/sign-in/email',
            method: 'POST',
            headers: {
                contentType: "application/json",
            },
            body: { "email": email, "password": password }
            //step 2: then save token to local storage
        }).then(res => {
            const responseBody = res.body;
            const tokenByAPI = responseBody.access_token
            const authorization = `Bearer ${tokenByAPI}`;
            // window.localStorage.setItem('questionable-portal.demo.demo-auth', `${tokenByAPI}`) //not work
            window.localStorage.setItem('questionable-portal.demo.demo-auth', `{"accessToken":"${tokenByAPI}"}`);
            //step 4 (optional): create a new file to store data
            const filename1 = 'cypress/fixtures/dataFake.json'
            cy.writeFile(filename1, {
                'authorization': authorization
            })
        })
    })
})