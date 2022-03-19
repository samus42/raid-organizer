import { getWellspring } from './wellspring'

describe('wellspring schedule', () => {
    it('starting day', () => {
        expect(getWellspring('2022-03-01')).toEqual({ stage: 'Defend', boss: `Zeerik, Lightflayer`, reward: `Father's Sins (Sniper Rifle)` })
    })


    it('reward rotation, mid season', () => {
        expect(getWellspring('2022-03-15')).toEqual({ stage: 'Defend', boss: `Vezuul, Lightflayer`, reward: `Tarnation (Grenade Launcher)` })
        expect(getWellspring('2022-03-16')).toEqual({ stage: 'Attack', boss: `Bor'gong, Warden of the Spring`, reward: `Fel Taradiddle (Bow)` })
        expect(getWellspring('2022-03-17')).toEqual({ stage: 'Defend', boss: `Zeerik, Lightflayer`, reward: `Father's Sins (Sniper Rifle)` })
        expect(getWellspring('2022-03-18')).toEqual({ stage: 'Attack', boss: `Golmag, Warden of the Spring`, reward: `Come to Pass (Auto Rifle)` })
        expect(getWellspring('2022-03-19')).toEqual({ stage: 'Defend', boss: `Vezuul, Lightflayer`, reward: `Tarnation (Grenade Launcher)` })
    })

})