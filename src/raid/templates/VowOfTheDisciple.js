const VowOfTheDisciple = () => ({
    raidName: 'Vow Of The Disciple',
    active: true,
    stages: [
        {
            title: 'Aquisition',
            description: '',
            roles: [
                { name: 'Gift Pillar Defender', type: 'soldier' },
                { name: 'Gift Pillar Runner', type: 'runner' },
                { name: 'Stop Pillar Defender', type: 'soldier' },
                { name: 'Stop Pillar Runner', type: 'runner' },
                { name: 'Kill Pillar Defender', type: 'soldier' },
                { name: 'Kill Pillar Runner', type: 'runner' },
            ]
        },
        {
            title: `Caretaker`,
            description: '',
            roles: [
                { name: 'Stunner 1', type: 'stunner' },
                { name: 'Stunner 2', type: 'stunner' },
                { name: 'Soldier 1', type: 'soldier' },
                { name: 'Soldier 2', type: 'soldier' },
                { name: 'Runner 1', type: 'runner' },
                { name: 'Runner 2', type: 'runner' },
            ]
        },
        {
            title: `Exhibition - Room 2`,
            description: '',
            roles: [
                { name: 'Laser', type: 'relic' },
                { name: 'Shield', type: 'relic' },
                { name: 'Left 1', type: 'soldier' },
                { name: 'Left 2', type: 'soldier' },
                { name: 'Right 1', type: 'soldier' },
                { name: 'Right 2', type: 'soldier' },
            ]
        },
        {
            title: `Exhibition - Room 3`,
            description: '',
            roles: [
                { name: 'Laser (Right)', type: 'relic' },
                { name: 'Shield', type: 'relic' },
                { name: 'Eye', type: 'relic' },
                { name: 'Left 1', type: 'soldier' },
                { name: 'Left 2', type: 'soldier' },
                { name: 'Right', type: 'soldier' },
            ]
        },
        {
            title: `Exhibition - Room 4`,
            description: 'Relic holders MUST be soldiers from room 3',
            roles: [
                { name: 'Laser (Left)', type: 'relic' },
                { name: 'Shield', type: 'relic' },
                { name: 'Eye', type: 'relic' },
                { name: 'Left', type: 'soldier' },
                { name: 'Right 1', type: 'soldier' },
                { name: 'Right 2', type: 'soldier' },
            ]
        },
        {
            title: `Rhulk - Barrier`,
            description: '',
            roles: [
                { name: 'Leecher 1', type: 'crystal' },
                { name: 'Leecher 2', type: 'crystal' },
                { name: 'Depositor', type: 'crystal' },
                { name: 'Reader', type: 'reader' },
                { name: 'Soldier 1', type: 'soldier' },
                { name: `Soldier 2`, type: 'soldier' },
            ]
        },
        {
            title: `Rhulk - Damage`,
            description: '',
            roles: [
                { name: 'Distractor', type: 'soldier' },
                { name: `Divinity User`, type: 'soldier' },
                { name: 'Empowered (planned)', type: 'crystal' },
                { name: 'Empowered (oops!)', type: 'soldier' },
                { name: 'Falls off the edge', type: 'soldier' },
                { name: `Doesn't notice distractor is standing is front of them and gets kicked when they dodge`, type: 'soldier' },
            ]
        },
    ]
})

export default VowOfTheDisciple