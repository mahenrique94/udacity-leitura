describe('Tests for Home page', () => {

    it('Should contains a H1 with App text content', () => {
        cy.visit('/')

        cy.log('Checking title of the app')
        cy.get('[data-cy=app-title]').should('to.have.length', 1)
        cy.get('[data-cy=app-title]').should('to.have.text', 'Leitura')

        cy.log('Checking description of the app')
        cy.get('[data-cy=app-describe]').should('to.have.length', 1)
    })

})
