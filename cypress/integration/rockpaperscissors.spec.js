context('Rock-Paper-Scissors', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    describe('Visitor can play a game of Rock-Paper-Scissors', () => {
        it('has a Rock button', () => {
            cy.get('#rock-button')
              .should('contain', 'Rock')
        });

        it('has a Paper button', () => {
            cy.get('#paper-button')
              .should('contain', 'Paper')
        });

        it('has a Scissors button', () => {
            cy.get('#scissors-button')
              .should('contain', 'Scissors')
        });

        it('can choose Rock', () => {
            cy.get('#rock-button')
              .click()
              .get('#player-choice')
              .should('contain', 'You chose rock')
        });

        it('can read the computers choice', () => {
            cy.get('#computer-choice')
              .should('contain', 'AI chose ')
        });

        it('gets a result', () => {
            cy.get('#round-result')
              .should('contain', 'Win!')
        });
        
        
    })
    
})