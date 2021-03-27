const Crota = () => ({
    raidName: `Crota's End`,
    active: true,
    stages: [
        {
            title: 'Lanterns',
            description: 'Running around the dark.',
            roles: [
                { name: 'Goes wrong way', type: 'soldier' },
                { name: 'Falls in hole 1', type: 'soldier' },
                { name: 'Falls in hole 2', type: 'soldier' },
                { name: 'Forgets about Knight', type: 'soldier' },
                { name: 'Forgets about Ogre', type: 'soldier' },
                { name: `Person with Don't Touch Me Gloves`, type: 'soldier' }
            ]
        },
        {
            title: 'Bridge',
            description: 'Get sword, cross bridge.',
            roles: [
                { name: 'First Across', type: 'soldier' },
                { name: 'Second Across', type: 'soldier' },
                { name: 'Third Across', type: 'soldier' },
                { name: 'Fourth Across', type: 'soldier' },
                { name: 'Fifth Across', type: 'soldier' },
                { name: 'Poor bastard', type: 'soldier' },
            ]
        },
        {
            title: 'Deathsinger',
            description: 'No singing!',
            roles: [
                { name: 'Left 1', type: 'soldier' },
                { name: 'Left 2', type: 'soldier' },
                { name: 'Left 3', type: 'soldier' },
                { name: 'Right 1', type: 'soldier' },
                { name: 'Right 2', type: 'soldier' },
                { name: 'Right 3', type: 'soldier' },
            ]
        },
        {
            title: 'Crota',
            description: 'Rockets ready!',
            roles: [
                { name: 'Swordbearer', type: 'swordsman' },
                { name: 'Bubble', type: 'decoy' },
                { name: 'Rocketeer 1', type: 'soldier' },
                { name: 'Rocketeer 2', type: 'soldier' },
                { name: 'Rocketeer 3', type: 'soldier' },
                { name: 'Rocketeer 4', type: 'soldier' },
            ]
        }
    ]
})

export default Crota