beforeEach(function () {
    //way 1: data Global - define in before hook and use in all TCs by using this.data
    cy.fixture('data').then(function (data) {
        this.data = data;
    })
    cy.fixture('invalidLogin').then((invalidLogin) => {
        this.invalidLogin = invalidLogin
    })

})