import _ from 'lodash'
const ranks = {
    'Deep Stone Crypt': {
        operator: [
            { name: 'Light Switch Operator', value: 5 },
            { name: 'Printing Press Operator', value: 10 },
            { name: 'Switchboard Operator', value: 20 },
            { name: 'Mathmatical Operator', value: 30 },
            { name: 'Heavy Machine Operator', value: 40 },
            { name: 'Smooth Operator', value: 50 },
        ],

        scanner: [
            { name: 'Barcode Scanner', value: 5 },
            { name: 'Flatbed Scanner', value: 10 },
            { name: 'Police Band Scanner', value: 20 },
            { name: 'Tri-corder', value: 30 },
            { name: 'Private Eye', value: 40 },
            { name: 'Stalker', value: 50 },
        ],

        suppressor: [
            { name: 'Squirt Gun', value: 5 },
            { name: 'Wet Blanket', value: 10 },
            { name: 'Fire Extinguisher', value: 20 },
            { name: 'Pistol Silencer', value: 30 },
            { name: 'Mom and Dad', value: 40 },
            { name: 'King Authur', value: 50 }
        ],
        soldier: [
            { name: 'Private', value: 5 },
            { name: 'Corporal', value: 10 },
            { name: 'Sergeant', value: 20 },
            { name: 'Major Pain', value: 30 },
            { name: 'Colonel Sanders', value: 40 },
            { name: 'Super Soldier', value: 50 }
        ]

    }
}

export const hasRanks = (raidName) => !!ranks[raidName]

export const determineRank = (raidName, type, count) => {
    const raidRanks = ranks[raidName]
    if (!raidRanks) {
        return { rank: 'None' }
    }
    const typeRanks = raidRanks[type]
    if (!typeRanks) {
        return { rank: 'None' }
    }
    const nextRankIndex = _.findIndex(typeRanks, (({ value }) => value > count))

    if (nextRankIndex < 0) {
        return { rank: typeRanks[typeRanks.length - 1].name }
    }
    else if (nextRankIndex === 0) {
        return { rank: 'None', nextAt: typeRanks[nextRankIndex].value }
    }

    return { rank: typeRanks[nextRankIndex - 1].name, nextAt: typeRanks[nextRankIndex].value }
}