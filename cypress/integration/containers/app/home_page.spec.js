describe("Tests for Home page", () => {

    const COUNT_APP_TITLE = 1

    it("Should contains a H1 with App text content", () => {
        cy.visit("/")

        cy.contains("App").should("to.have.length", COUNT_APP_TITLE)
    })

})
