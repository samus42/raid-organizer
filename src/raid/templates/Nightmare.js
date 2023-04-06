const Nightmare = () => ({
    raidName: `Root of Nightmares`,
    active: true,
    stages: [
        {
            title: 'Cataclysm',
            description: 'Punch the Psions, shoot the Tormentors.',
            roles: [
                { name: 'Gardener', type: 'gardener' },
                { name: 'Psion Puncher', type: 'soldier' },
                { name: 'Light Side 1', type: 'soldier' },
                { name: 'Light Side 2', type: 'soldier' },
                { name: 'Dark Soldier 1', type: 'soldier' },
                { name: `Dark Soldier 2`, type: 'soldier' }
            ]
        },
        {
            title: 'Scisson',
            description: 'Gardners fly through the air, everyone else kill anything that moves.',
            strategies: [
                {
                    title: 'Four Runner',
                    description: 'Fastest way',
                    roles: [
                        { name: 'Light Gardener 1', type: 'gardener' },
                        { name: 'Light Gardener 2', type: 'soldier' },
                        { name: 'Light Soldier', type: 'soldier' },
                        { name: 'Dark Gardener 1', type: 'soldier' },
                        { name: 'Dark Gardener 2', type: 'soldier' },
                        { name: `Dark Soldier`, type: 'soldier' }
                    ]
                },
                {
                    title: 'Two Runner',
                    description: 'Good when teaching a bunch of people',
                    roles: [
                        { name: 'Light Gardener 1', type: 'gardener' },
                        { name: 'Light Soldier 1', type: 'soldier' },
                        { name: 'Light Soldier 2', type: 'soldier' },
                        { name: 'Dark Gardener 1', type: 'soldier' },
                        { name: 'Dark Soldier 1', type: 'soldier' },
                        { name: `Dark Soldier 2`, type: 'soldier' }
                    ]
                }
            ]
        },
        {
            title: 'Macrocosm',
            description: 'Move the planets',
            strategies: [
                {
                    title: 'Free for all',
                    description: `Everyone reads their own plate.`,
                    roles: [
                        { name: 'Light Far Plate', type: 'reader' },
                        { name: 'Light Near Plate', type: 'reader' },
                        { name: 'Dark Far Plate', type: 'reader' },
                        { name: `Dark Near Plate`, type: 'reader' },
                        { name: 'Soldier 1', type: 'soldier' },
                        { name: 'Soldier 2', type: 'soldier' }
                    ]
                },
                {
                    title: 'Set Readers',
                    description: `Useful for newer teams, or when people can't talk`,
                    roles: [
                        { name: 'Light Reader', type: 'reader' },
                        { name: 'Light Far Plate', type: 'soldier' },
                        { name: 'Light Near Plate', type: 'soldier' },
                        { name: 'Dark Reader', type: 'reader' },
                        { name: 'Dark Far Plate', type: 'soldier' },
                        { name: `Dark Near Plate`, type: 'soldier' }
                    ]
                }
            ]
        },
        {
            title: 'Nezarec',
            description: 'Tanks take the debuff so the Gardeners can do their jobs.',
            roles: [
                { name: 'Light Gardener', type: 'gardener' },
                { name: 'Dark Gardener', type: 'soldier' },
                { name: 'Tank 1', type: 'tank' },
                { name: 'Tank 2', type: 'tank' },
                { name: 'Soldier 1', type: 'soldier' },
                { name: `Soldier 2`, type: 'soldier' }
            ]
        },
    ]
})

export default Nightmare