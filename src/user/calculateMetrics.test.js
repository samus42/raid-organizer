import calculateMetrics from './calculateMetrics'

describe('calculate metrics', () => {
    let { raid, role1, role2, role3, role4, stage1, stage2 } = {}

    const player1 = { destinyId: '1' }
    const player2 = { destinyId: '2' }
    // const player3 = { destinyId: '3' }
    beforeEach(() => {
        role1 = { name: 'alpha', type: 'soldier', player: player1 }
        role2 = { name: 'beta', type: 'scanner', player: player2 }
        role3 = { name: 'gamma', type: 'soldier', player: player1 }
        role4 = { name: 'delta', type: 'operator', player: player2 }
        stage1 = {
            title: 'a', roles: [
                role1, role2,
            ]
        }
        stage2 = {
            title: 'b', roles: [
                role3, role4
            ]
        }
        raid = {
            raidName: 'Deep Stone Crypt',
            stages: [stage1, stage2]
        }
    })

    it('single raid', () => {
        const results1 = calculateMetrics(player1.destinyId, [raid])
        const results2 = calculateMetrics(player2.destinyId, [raid])
        expect(results1).toEqual([{
            raidName: 'Deep Stone Crypt',
            numRuns: 1,
            roleTypes: {
                soldier: 2
            }
        }])
        expect(results2).toEqual([{
            raidName: 'Deep Stone Crypt',
            numRuns: 1,
            roleTypes: {
                scanner: 1,
                operator: 1
            }
        }])
    })

    it('single raid, player slot empty', () => {
        raid.stages[0].roles[0].player = null
        const results1 = calculateMetrics(player1.destinyId, [raid])
        const results2 = calculateMetrics(player2.destinyId, [raid])
        expect(results1).toEqual([{
            raidName: 'Deep Stone Crypt',
            numRuns: 1,
            roleTypes: {
                soldier: 1
            }
        }])
        expect(results2).toEqual([{
            raidName: 'Deep Stone Crypt',
            numRuns: 1,
            roleTypes: {
                scanner: 1,
                operator: 1
            }
        }])
    })

    it('multiple runs of same raid', () => {
        const results1 = calculateMetrics(player1.destinyId, [raid, raid, raid])
        const results2 = calculateMetrics(player2.destinyId, [raid, raid, raid])
        expect(results1).toEqual([{
            raidName: 'Deep Stone Crypt',
            numRuns: 3,
            roleTypes: {
                soldier: 6
            }
        }])
        expect(results2).toEqual([{
            raidName: 'Deep Stone Crypt',
            numRuns: 3,
            roleTypes: {
                scanner: 3,
                operator: 3
            }
        }])
    })

    it('runs of different raids', () => {
        const raid2 = { ...raid, raidName: 'Garden' }
        const results1 = calculateMetrics(player1.destinyId, [raid, raid2, raid, raid2])
        expect(results1).toEqual([{
            raidName: 'Deep Stone Crypt',
            numRuns: 2,
            roleTypes: {
                soldier: 4
            }
        },
        {
            raidName: 'Garden',
            numRuns: 2,
            roleTypes: {
                soldier: 4
            }
        }])
    })
})