import dayjs from 'dayjs'

const sector = (name, area) => ({ name, area })
export const Areas = {
    Cosmodrome: 'Cosmodrome',
    DreamingCity: 'Dreaming City',
    Moon: 'Moon',
    ThroneWorld: 'Throne World'
}

export const Rewards = {
    Chest: 'Chest',
    Head: 'Helmet',
    Legs: 'Legs',
    Arms: 'Arms'
}

export const FirstDayOfLostSectorRotation = dayjs('2022-02-22')

const sectorRotation = [
    sector('Veles Labyrinth', Areas.Cosmodrome),
    sector('Exodus Garden 2A', Areas.Cosmodrome),
    sector(`Aphelion's Rest`, Areas.DreamingCity),
    sector(`Bay of Drowned Wishes`, Areas.DreamingCity),
    sector(`Chamber of Starlight`, Areas.DreamingCity),
    sector(`K1 Revelation`, Areas.Moon),
    sector(`K1 Crew Quarters`, Areas.Moon),
    sector(`K1 Logistics`, Areas.Moon),
    sector(`Metamorphosis`, Areas.ThroneWorld),
    sector(`Sepulcher`, Areas.ThroneWorld),
    sector(`Extraction`, Areas.ThroneWorld),
]

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