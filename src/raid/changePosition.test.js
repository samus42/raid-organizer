import changePosition from './changePosition'

describe('changePosition', () => {
    let { raid, role1, role2, role3, role4, stage1, stage2 } = {}

    const player1 = { destinyId: '1' }
    const player2 = { destinyId: '2' }
    // const player3 = { destinyId: '3' }
    beforeEach(() => {
        role1 = { name: 'alpha' }
        role2 = { name: 'beta' }
        role3 = { name: 'gamma' }
        role4 = { name: 'delta' }
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
            stages: [stage1, stage2]
        }
    })
    describe('from roster', () => {
        it('place into empty position', () => {
            const newRaid = changePosition(raid, stage1, role1, player1)
            expect(role1.player).toBeFalsy()
            expect(newRaid).toEqual({
                stages: [
                    { title: 'a', roles: [{ ...role1, player: player1 }, role2], },
                    { title: 'b', roles: [role3, role4], },
                ]
            })
        })

        it('place into empty position when player already in stage, swaps to new role', () => {
            role2.player = player1
            const newRaid = changePosition(raid, stage1, role1, player1)
            expect(role1.player).toBeFalsy()
            expect(newRaid).toEqual({
                stages: [
                    { title: 'a', roles: [{ ...role1, player: player1 }, { ...role2, player: undefined }], },
                    { title: 'b', roles: [role3, role4], },
                ]
            })
        })
        it('place into filled position', () => {
            role1.player = player2
            const newRaid = changePosition(raid, stage1, role1, player1)
            expect(role1.player).toEqual(player2)
            expect(newRaid).toEqual({
                stages: [
                    { title: 'a', roles: [{ ...role1, player: player1 }, role2], },
                    { title: 'b', roles: [role3, role4], },
                ]
            })
        })

        it('placing to position filled by same player', () => {
            role1.player = player1
            const newRaid = changePosition(raid, stage1, role1, player1)
            expect(role1.player).toEqual(player1)
            expect(newRaid).toEqual({
                stages: [
                    { title: 'a', roles: [{ ...role1, player: player1 }, role2], },
                    { title: 'b', roles: [role3, role4], },
                ]
            })
        })
    })

    describe('from same stage', () => {
        beforeEach(() => {
            role1.player = player1
        })
        it('place into empty position', () => {
            const newRaid = changePosition(raid, stage1, role2, player1)
            expect(newRaid).toEqual({
                stages: [
                    { title: 'a', roles: [{ ...role1, player: undefined }, { ...role2, player: player1 }], },
                    { title: 'b', roles: [role3, role4], },
                ]
            })
        })

        it('place into filled position swaps players', () => {
            role2.player = player2
            const newRaid = changePosition(raid, stage1, role2, player1)
            expect(newRaid).toEqual({
                stages: [
                    { title: 'a', roles: [{ ...role1, player: player2 }, { ...role2, player: player1 }], },
                    { title: 'b', roles: [role3, role4], },
                ]
            })
        })

        it('placing to position filled by same player', () => {
            const newRaid = changePosition(raid, stage1, role1, player1)
            expect(newRaid).toEqual({
                stages: [
                    { title: 'a', roles: [{ ...role1, player: player1 }, role2], },
                    { title: 'b', roles: [role3, role4], },
                ]
            })
        })
    })

    describe('from different stage', () => {
        beforeEach(() => {
            role1.player = player1
        })
        it('place into empty position, does not remove from originating', () => {

            const newRaid = changePosition(raid, stage2, role3, player1)
            expect(newRaid).toEqual({
                stages: [
                    { title: 'a', roles: [role1, role2], },
                    { title: 'b', roles: [{ ...role3, player: player1 }, role4], },
                ]
            })
        })

        it('place into filled position', () => {
            role3.player = player2
            const newRaid = changePosition(raid, stage2, role3, player1)
            expect(newRaid).toEqual({
                stages: [
                    { title: 'a', roles: [role1, role2], },
                    { title: 'b', roles: [{ ...role3, player: player1 }, role4], },
                ]
            })

        })

        it('placing to position filled by same player', () => {
            role3.player = player1
            const newRaid = changePosition(raid, stage2, role3, player1)
            expect(newRaid).toEqual({
                stages: [
                    { title: 'a', roles: [role1, role2], },
                    { title: 'b', roles: [{ ...role3, player: player1 }, role4], },
                ]
            })
        })
    })
})