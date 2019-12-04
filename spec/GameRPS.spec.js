require('../spec.helper')

describe('Play a game of RPS', () => {
    new GameRPS

    it('returns a computer choice that is R/P/S', () => {
        let cpuChoice = GameRPS.computerChoice()
        cpuChoicesArray = ['rock', 'paper', 'scissors']
        expect(cpuChoicesArray).to.include(cpuChoice)
    })

    it('returns Rock as winner vs Scissors', () => {
    })

    it('returns Paper as winner vs Rock', () => {
    })

    it('returns Scissors as winner vs Paper', () => {
    })

    it('returns Draw if both choose the same', () => {
    })
})