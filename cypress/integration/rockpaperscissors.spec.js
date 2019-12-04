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
            cy.get('#rock-button')
              .should('contain', 'Paper')
        });

        it('has a Scissors button', () => {
            cy.get('#rock-button')
              .should('contain', 'Scissors')
        });

        it('can play the game choosing Rock', () => {
            cy.get('#rock-button')
              .click()
        });

        it('can read the computers choice', () => {
            cy.get('#computer-play')
              .should('containt', 'AI choose ')
        });


        it('gets a result', () => {
            cy.get('#round-result')
              .should('contain', 'Win!')
        });
        
        
    })
    
})