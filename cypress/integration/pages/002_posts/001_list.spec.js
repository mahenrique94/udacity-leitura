describe('Tests for list of the posts page', () => {

    it('Should have a default list of the posts', () => {
        cy.visit('/')

        cy.get('[data-cy=nav-link-posts]').click()

        cy.url().should('include', 'posts')

        cy.get('[data-cy=posts-post]').should('to.have.length', 2)
    })

})
