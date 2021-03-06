import DeepStoneCrypt from './DeepStoneCrypt'
import GardenOfSalvation from './GardenOfSalvation'
import LastWish from './LastWish'

const raidMap = {
    'garden': GardenOfSalvation,
    'crypt': DeepStoneCrypt,
    'wish': LastWish,
}

export const newRaidByKey = (key) => {
    if (!raidMap[key]) {
        throw new Error('No raid for key: ', key)
    }
    const newRaid = raidMap[key]()
    newRaid.active = true
    return newRaid
}

export const isRaidKey = (key) => !!raidMap[key]
