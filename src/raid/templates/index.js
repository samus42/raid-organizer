import DeepStoneCrypt from './DeepStoneCrypt'
import GardenOfSalvation from './GardenOfSalvation'
import LastWish from './LastWish'
import Crota from './Crota'
import TakenKing from './TakenKing'
import WrathOfTheMachine from './WrathOfTheMachine'
import VaultOfGlass from './VaultOfGlass'
import VowOfTheDisciple from './VowOfTheDisciple'
import Nightmare from './Nightmare'

const raidMap = {
    'garden': GardenOfSalvation,
    'crypt': DeepStoneCrypt,
    'wish': LastWish,
    'crota': Crota,
    'ttk': TakenKing,
    'wrath': WrathOfTheMachine,
    'vault': VaultOfGlass,
    'disciple': VowOfTheDisciple,
    'nightmare': Nightmare
}

export const newRaidByKey = (key) => {
    if (!raidMap[key]) {
        throw new Error('No raid for key: ', key)
    }
    const newRaid = raidMap[key]()
    newRaid.active = true
    newRaid.roster = []
    newRaid.stages.forEach((stage) => {
        if (stage.strategies) {
            stage.roles = stage.strategies[0].roles
            stage.strategy = stage.strategies[0]
        }
    })
    return newRaid
}

export const isRaidKey = (key) => !!raidMap[key]
