describe('Tests for form of the posts page', () => {

    it('Should have a default list of the posts', () => {
        cy.visit('/')

        cy.get('[data-cy=nav-link-posts]').click()

        cy.url().should('include', 'posts')

        cy.get('[data-cy=posts-add]').click()

        cy.url().should('include', 'form')

        cy.get('[data-cy=input-title]').type('Testing')
        cy.get('[data-cy=input-author]').type('Test')
        cy.get('.CodeMirror').click()
        cy.get('.CodeMirror-scroll').type('Testing a new post')
    })

})
