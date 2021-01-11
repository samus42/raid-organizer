const LastWish = () => ({
    raidName: 'Deep Stone Crypt',
    active: true,
    stages: [
        {
            title: 'First',
            description: '3 pairs for the different symbol pairs',
            roles: [
                { name: 'Team A - 1', type: 'soldier' },
                { name: 'Team A - 2', type: 'soldier' },
                { name: 'Team B - 1', type: 'soldier' },
                { name: 'Team B - 2', type: 'soldier' },
                { name: 'Team C - 1', type: 'soldier' },
                { name: 'Team C - 2', type: 'soldier' }
            ]
        },
        {
            title: 'Second - Arena',
            description: '3 pairs for the different symbol pairs',
            roles: [
                { name: 'Crystal - 1', type: 'crystal' },
                { name: 'Crystal - 2', type: 'crystal' },
                { name: 'Crystal - 3', type: 'crystal' },
                { name: 'Soldier - 1', type: 'soldier' },
                { name: 'Soldier - 2', type: 'soldier' },
                { name: 'Soldier - 3', type: 'soldier' }
            ]
        },
        {
            title: 'Second - Puzzle',
            description: '3 pairs for the different symbol pairs',
            roles: [
                { name: 'Puzzle - 1', type: 'puzzle' },
                { name: 'Puzzle - 2', type: 'puzzle' },
                { name: 'Puzzle - 3', type: 'puzzle' },
                { name: 'Puzzle - 4', type: 'puzzle' },
                { name: 'Soldier - 1', type: 'soldier' },
                { name: 'Soldier - 2', type: 'soldier' }
            ]
        },
        {
            title: 'Third',
            description: '',
            roles: [
                { name: 'Left - 1st orbs', type: 'soldier' },
                { name: 'Left - 2nd orbs', type: 'soldier' },
                { name: 'Left - Rescue', type: 'soldier' },
                { name: 'Right - 1st orbs', type: 'soldier' },
                { name: 'Right - 2nd orbs', type: 'soldier' },
                { name: 'Right - Rescue', type: 'soldier' },
            ]
        },
        {
            title: 'Vault',
            description: '',
            roles: [
                { name: 'Trees - Symbols', type: 'soldier' },
                { name: 'Trees - Runner', type: 'soldier' },
                { name: 'Stairs - Symbols', type: 'soldier' },
                { name: 'Stairs - Runner', type: 'soldier' },
                { name: 'Rocks - Symbols', type: 'soldier' },
                { name: 'Rocks - Runner', type: 'soldier' },
            ]
        }
    ],
})

export default LastWish