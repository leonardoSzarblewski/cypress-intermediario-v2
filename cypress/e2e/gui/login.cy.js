describe('login', () => {
  it('successFully', () => {
    cy.login()

    cy.get('.qa-user-avatar')
      .should('be.visible')
  })
})