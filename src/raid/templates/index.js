import DeepStoneCrypt from './DeepStoneCrypt'
import GardenOfSalvation from './GardenOfSalvation'
import LastWish from './LastWish'
import Crota from './Crota'
import TakenKing from './TakenKing'
import WrathOfTheMachine from './WrathOfTheMachine'

const raidMap = {
    'garden': GardenOfSalvation,
    'crypt': DeepStoneCrypt,
    'wish': LastWish,
    'crota': Crota,
    'ttk': TakenKing,
    'wrath': WrathOfTheMachine
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
