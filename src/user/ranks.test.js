import { determineRank } from './ranks'

describe('ranks', () => {
    it('max rank', () => {
        expect(determineRank('Deep Stone Crypt', 'operator', 110)).toEqual({
            rank: 'Smooth Operator'
        })
    })

    it('no rank', () => {
        expect(determineRank('Deep Stone Crypt', 'operator', 1)).toEqual({
            rank: 'None', nextAt: 5
        })
    })

    it('ranked', () => {
        expect(determineRank('Deep Stone Crypt', 'operator', 6)).toEqual({
            rank: 'Light Switch Operator', nextAt: 10
        })
    })
})