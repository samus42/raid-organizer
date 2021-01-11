import _ from 'lodash'
const ranks = {
    'Deep Stone Crypt': {
        operator: [
            { name: 'Light Switch Operator', value: 5 },
            { name: 'Printing Press Operator', value: 20 },
            { name: 'Switchboard Operator', value: 40 },
            { name: 'Mathmatical Operator', value: 60 },
            { name: 'Heavy Machine Operator', value: 80 },
            { name: 'Smooth Operator', value: 100 },
        ],

        scanner: [
            { name: 'Barcode Scanner', value: 5 },
            { name: 'Flatbed Scanner', value: 20 },
            { name: 'Police Band Scanner', value: 40 },
            { name: 'Tri-corder', value: 60 },
            { name: 'Private Eye', value: 80 },
            { name: 'Stalker', value: 100 },
        ],

        suppressor: [
            { name: 'Squirt Gun', value: 5 },
            { name: 'Wet Blanket', value: 20 },
            { name: 'Fire Extinguisher', value: 40 },
            { name: 'Pistol Silencer', value: 60 },
            { name: 'Mom and Dad', value: 80 },
            { name: 'King Authur', value: 100 }
        ]

    }
}

export const determineRank = (raidName, type, count) => {
    const raidRanks = ranks[raidName]
    if (!raidRanks) {
        return { rank: 'None' }
    }
    const typeRanks = raidRanks[type]
    const nextRankIndex = _.findIndex(typeRanks, (({ value }) => value > count))

    if (nextRankIndex < 0) {
        return { rank: typeRanks[typeRanks.length - 1].name }
    }
    else if (nextRankIndex === 0) {
        return { rank: 'None', nextAt: typeRanks[nextRankIndex].value }
    }

    return { rank: typeRanks[nextRankIndex - 1].name, nextAt: typeRanks[nextRankIndex].value }
}