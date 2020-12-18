const GardenOfSalvation = () => ({
    raidName: 'Garden Of Salvation',
    active: true,
    stages: [
        {
            title: 'Evade Concecrated Mind',
            description: 'Outside team starts dealing with the mind first, while the inside team goes to clear the first door.',
            roles: [
                { name: 'Outside Team - 1', type: 'outside' },
                { name: 'Outside Team - 2', type: 'outside' },
                { name: 'Outside Team - 3', type: 'outside' },
                { name: 'Inside Team - 1', type: 'inside' },
                { name: 'Inside Team - 2', type: 'inside' },
                { name: 'Inside Team - 3', type: 'inside' },
            ]
        },
        {
            title: 'Summon Concecrated Mind',
            description: 'Pillars are labeled in order going clockwise on entering the area.',
            roles: [
                { name: 'Pillar 1', type: 'pillar' },
                { name: 'Pillar 2', type: 'pillar' },
                { name: 'Pillar 3', type: 'pillar' },
                { name: 'Pillar 4', type: 'pillar' },
                { name: 'Runner for 1 & 2', type: 'runner' },
                { name: 'Runner for 3 & 4', type: 'runner' },
            ]
        },
        {
            title: 'Destroy Concecrated Mind',
            description: 'Gambit team collects motes, Chase collects the bombs and shoots eyes.',
            roles: [
                { name: 'Team Gambit - 1', type: 'motes' },
                { name: 'Team Gambit - 2', type: 'motes' },
                { name: 'Team Gambit - 3', type: 'motes' },
                { name: 'Team Chase - 1', type: 'chase' },
                { name: 'Team Chase - 2', type: 'chase' },
                { name: 'Team Chase - 3', type: 'chase' },
            ]
        },
        {
            title: 'Defeat Sanctified Mind - Gambit',
            description: '2 teams gathering motes, 1 team holding platform.',
            roles: [
                { name: 'Gambit 1st Team - 1', type: 'motes' },
                { name: 'Gambit 1st Team - 2', type: 'motes' },
                { name: 'Gambit 2nd Team - 1', type: 'motes' },
                { name: 'Gambit 2nd Team - 2', type: 'motes' },
                { name: 'Platform - 1', type: 'platform' },
                { name: 'Platform - 2', type: 'platform' },
            ]
        },
        {
            title: 'Defeat Sanctified Mind - Damage',
            description: 'This clears the nodes for damage.',
            roles: [
                { name: 'Tether Team Red - 1', type: 'red' },
                { name: 'Tether Team Red - 2', type: 'red' },
                { name: 'Tether Team Red - 3', type: 'red' },
                { name: 'Tether Team Blue - 1', type: 'blue' },
                { name: 'Tether Team Blue - 2', type: 'blue' },
                { name: 'Tether Team Blue - 3', type: 'blue' },
            ]
        }
    ]
})

export default GardenOfSalvation