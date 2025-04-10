describe('logout', () => {
    beforeEach('login', () => {
        cy.login()
        cy.visit('/')
    })

    it('successFully', () => {
        cy.logout()

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })
})
