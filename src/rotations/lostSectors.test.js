import { Areas, getLostSector, Rewards } from './lostSectors'

xdescribe('lost sector schedule', () => {
    it('starting day', () => {
        expect(getLostSector('2022-05-24')).toEqual({ name: 'K1 Crew Quarters', area: Areas.Moon, reward: Rewards.Chest })
    })

    it('same sector as starting day, different reward', () => {
        expect(getLostSector('2022-06-04')).toEqual({ name: 'K1 Crew Quarters', area: Areas.Moon, reward: Rewards.Arms })
    })

    it('last in rotation', () => {
        expect(getLostSector('2022-06-03')).toEqual({ name: 'The Quarry', area: Areas.EDZ, reward: Rewards.Legs })
    })

    // it('reward rotation, mid season', () => {
    //     expect(getLostSector('2022-03-15')).toEqual({ name: 'Extraction', area: Areas.ThroneWorld, reward: Rewards.Head })
    //     expect(getLostSector('2022-03-16')).toEqual({ name: 'Veles Labyrinth', area: Areas.Cosmodrome, reward: Rewards.Legs })
    //     expect(getLostSector('2022-03-17')).toEqual({ name: 'Exodus Garden 2A', area: Areas.Cosmodrome, reward: Rewards.Arms })
    //     expect(getLostSector('2022-03-18')).toEqual({ name: `Aphelion's Rest`, area: Areas.DreamingCity, reward: Rewards.Chest })
    //     expect(getLostSector('2022-03-19')).toEqual({ name: 'Bay of Drowned Wishes', area: Areas.DreamingCity, reward: Rewards.Head })
    // })

})