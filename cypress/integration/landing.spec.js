context('Rock-Paper-Scissors', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    describe('Visitor can reach landing page and start a game', () => {
        it('has header text ROCK PAPER SCISSORS', () => {
            cy.get('.landing.header')
              .should('contain', 'ROCK PAPER SCISSORS')

        });

        it('can start a game', () => {
            cy.get('#play-button')
              .click()
              .get('.player-wincounter')
              .should('contain', 'PLAYER 0')
        });
    })
    
})