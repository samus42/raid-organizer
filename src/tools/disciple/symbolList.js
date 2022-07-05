export const symbolFileNames = [
    'ascendant_plane-alpha.png',
    'black_garden-alpha.png',
    'black_heart-alpha.png',
    'commune-alpha.png',
    'darkness-alpha.png',
    'drink-alpha.png',
    'earth-alpha.png',
    'enter-alpha.png',
    'fleet-alpha.png',
    'gift-alpha.png',
    'grief-alpha.png',
    'guardian-alpha.png',
    'hive-alpha.png',
    'kill-alpha.png',
    'knowledge-alpha.png',
    'light-alpha.png',
    'love-alpha.png',
    'neutral-alpha.png',
    'pyramid-alpha.png',
    'savathun-alpha.png',
    'scorn-alpha.png',
    'stop-alpha.png',
    'tower-alpha.png',
    'traveler-alpha.png',
    'witness-alpha.png',
    'worm-alpha.png',
    'worship-alpha.png',
]

const obeliskOnly = [
    'ascendant_plane-alpha.png',
    'black_garden-alpha.png',
    'black_heart-alpha.png',
    'earth-alpha.png',
    'fleet-alpha.png',
    'guardian-alpha.png',
    'hive-alpha.png',
    'love-alpha.png',
    'savathun-alpha.png',
    'scorn-alpha.png',
    'tower-alpha.png',
    'witness-alpha.png',
    'worm-alpha.png',
]

const roomsOnly = [
    'commune-alpha.png',
    'drink-alpha.png',
    'enter-alpha.png',
    'gift-alpha.png',
    'grief-alpha.png',
    'kill-alpha.png',
    'knowledge-alpha.png',
    'stop-alpha.png',
    'worship-alpha.png',
]

const puzzleOnly = [
    'pyramid-alpha.png',
    'gift-alpha.png',
    'darkness-alpha.png',
    'traveler-alpha.png',
    'worship-alpha.png',
    'light-alpha.png',
    'stop-alpha.png',
    'guardian-alpha.png',
    'kill-alpha.png',
]

export const SymbolFilters = {
    All: 'all',
    Obelisk: 'obelisk',
    Rooms: 'rooms',
    Puzzle: 'puzzle',
}

export const getFilteredSymbols = (filter) => {
    if (filter === SymbolFilters.Obelisk) {
        return obeliskOnly
    }
    if (filter === SymbolFilters.Rooms) {
        return roomsOnly
    }
    if (filter === SymbolFilters.Puzzle) {
        return puzzleOnly
    }
    return symbolFileNames
}

