const WrathOfTheMachine = () => ({
    raidName: 'Wrath Of The Machine',
    active: true,
    stages: [
        {
            title: 'Voltage Rising',
            description: '',
            roles: [
                { name: 'Left Runner', type: 'runner' },
                { name: 'Left Defender', type: 'soldier' },
                { name: 'Center Runner', type: 'runner' },
                { name: 'Center Defender', type: 'soldier' },
                { name: 'Right Runner', type: 'runner' },
                { name: 'Right Defender', type: 'soldier' },
            ]
        },
        {
            title: `Vosik's Lair`,
            description: '',
            roles: [
                { name: 'Left - Bomb', type: 'bomber' },
                { name: 'Left - Defender', type: 'soldier' },
                { name: 'Center - Bomb', type: 'bomber' },
                { name: 'Center - Defender', type: 'soldier' },
                { name: 'Right - Bomb', type: 'bomber' },
                { name: 'Right - Defender', type: 'soldier' },
            ]
        },
        {
            title: 'Siege Engine',
            description: '',
            roles: [
                { name: 'Part Carrier 1', type: 'runner' },
                { name: 'Part Carrier 2', type: 'runner' },
                { name: 'Part Carrier 3', type: 'runner' },
                { name: 'Soldier 1', type: 'soldier' },
                { name: 'Soldier 2', type: 'soldier' },
                { name: 'Soldier 3', type: 'soldier' },
            ]
        },
        {
            title: 'Aksis Part 1',
            description: '',
            roles: [
                { name: 'Left - Bomb', type: 'bomber' },
                { name: 'Left - Cannon', type: 'cannon' },
                { name: 'Center - Bomb', type: 'bomber' },
                { name: 'Center - Cannon', type: 'cannon' },
                { name: 'Right - Bomb', type: 'bomber' },
                { name: 'Right - Cannon', type: 'cannon' },
            ]
        },
        {
            title: 'Aksis Part 2',
            description: '',
            roles: [
                { name: 'Left - Bomb', type: 'bomber' },
                { name: 'Left - Cannon', type: 'cannon' },
                { name: 'Center - Bomb', type: 'bomber' },
                { name: 'Center - Cannon', type: 'cannon' },
                { name: 'Right - Bomb', type: 'bomber' },
                { name: 'Right - Cannon', type: 'cannon' },
            ]
        },
    ]
})

export default WrathOfTheMachine