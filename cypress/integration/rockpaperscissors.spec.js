context('Rock-Paper-Scissors', () => {
    beforeEach(() => {
        cy.visit('/rockpaperscissors')
    });
    describe('Visitor can play a game of Rock-Paper-Scissors', () => {
        it('has a Rock image', () => {
            cy.get('.weapon-image.rock')
              .should('have.attr', 'src')
              .and('include', 'rock')
        });

        it('has a Paper image', () => {
            cy.get('.weapon-image.paper')
              .should('have.attr', 'src')
              .and('include', 'paper')
        });

        it('has a Scissors image', () => {
            cy.get('.weapon-image.scissors')
              .should('have.attr', 'src')
              .and('include', 'scissors')
        });

        it('can choose Rock', () => {
            cy.get('.weapon-image.rock:first')
              .click()
              .get('#player-choice')
              .should('contain', 'You chose rock')
        });

        it('can read the computers choice', () => {
            cy.get('.weapon-image.paper:first')
              .click()
              .get('#computer-choice')
              .should('contain', 'AI chose ')
        });

        it('gets a result', () => {
            cy.get('.weapon-image.scissors:first')
              .click()
              .get('#round-result')
              .should('contain', '!')
        });

        it('can reset the game', () => {
          cy.get('.weapon-image.scissors:first')
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .get('#reset')
            .click()
            .get('.player-wincounter')
            .should('contain', 'PLAYER 0')
      });
    })
    
})