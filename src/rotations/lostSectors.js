import dayjs from 'dayjs'

const sector = (name, area) => ({ name, area })
export const Areas = {
    Cosmodrome: 'Cosmodrome',
    DreamingCity: 'Dreaming City',
    Moon: 'Moon',
    ThroneWorld: 'Throne World',
    Nessus: 'Nessus',
    EDZ: 'EDZ',
    Europa: 'Europa'
}

export const Rewards = {
    Chest: 'Chest',
    Head: 'Helmet',
    Legs: 'Legs',
    Arms: 'Arms'
}

export const FirstDayOfLostSectorRotation = dayjs('2022-08-23')

const sectorRotation = [
    sector('Concealed Void', Areas.Europa),
    sector('Bunker E15', Areas.Europa),
    sector('The Conflux', Areas.Nessus),
    sector('The Rift', Areas.Nessus),
    sector(`K1 Crew Quarters`, Areas.Moon),
    sector(`K1 Logistics`, Areas.Moon),
    sector(`K1 Communion`, Areas.Moon),
    sector(`Skydock IV`, Areas.EDZ),
    sector(`Scavenger's Den`, Areas.EDZ),
    sector(`The Quarry`, Areas.EDZ),
    sector(`Excavation Site XII`, Areas.EDZ),
]

/*
    sector(`K1 Revelation`, Areas.Moon),

    sector('Veles Labyrinth', Areas.Cosmodrome),
    sector('Exodus Garden 2A', Areas.Cosmodrome),
    sector(`Aphelion's Rest`, Areas.DreamingCity),
    sector(`Bay of Drowned Wishes`, Areas.DreamingCity),
    sector(`Chamber of Starlight`, Areas.DreamingCity),
        sector(`Metamorphosis`, Areas.ThroneWorld),
    sector(`Sepulcher`, Areas.ThroneWorld),
    sector(`Extraction`, Areas.ThroneWorld),
    

*/
const rewardRotation = [
    Rewards.Chest,
    Rewards.Head,
    Rewards.Legs,
    Rewards.Arms
]

export const getLostSector = (date) => {
    const diff = dayjs(date).diff(FirstDayOfLostSectorRotation, 'day')
    const sector = sectorRotation[diff % sectorRotation.length]
    const reward = rewardRotation[diff % rewardRotation.length]

    return { ...sector, reward }
}