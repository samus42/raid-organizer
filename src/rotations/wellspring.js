import dayjs from 'dayjs'

export const FirstDayOfWellspringRotation = dayjs('2022-03-01')
const wellspringRotations = [
    { stage: 'Defend', boss: `Zeerik, Lightflayer`, reward: `Father's Sins (Sniper Rifle)` },
    { stage: 'Attack', boss: `Golmag, Warden of the Spring`, reward: `Come to Pass (Auto Rifle)` },
    { stage: 'Defend', boss: `Vezuul, Lightflayer`, reward: `Tarnation (Grenade Launcher)` },
    { stage: 'Attack', boss: `Bor'gong, Warden of the Spring`, reward: `Fel Taradiddle (Bow)` },
]

export const getWellspring = (date) => {
    const diff = dayjs(date).diff(FirstDayOfWellspringRotation, 'day')
    return wellspringRotations[diff % wellspringRotations.length]
}