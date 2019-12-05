require('../spec.helper')

describe('Play a game of RPS', () => {
    new GameRPS

    it('returns a computer choice that is R/P/S', () => {
        let cpuChoice = GameRPS.computerChoice()
        cpuChoicesArray = ['rock', 'paper', 'scissors']
        expect(cpuChoicesArray).to.include(cpuChoice)
    })

    it('returns Draw if both choose the same', () => {
        let playerChoice = 'rock'
        let cpuChoice = 'rock'
        roundResult = GameRPS.playRound(playerChoice, cpuChoice)
        expect(roundResult).to.eql('draw')
    })

    it('returns Rock as winner vs Scissors', () => {
        expect(false).to.eql(true)
    })

    it('returns Paper as winner vs Rock', () => {
        expect(false).to.eql(true)
    })

    it('returns Scissors as winner vs Paper', () => {
        expect(false).to.eql(true)
    })

    
})