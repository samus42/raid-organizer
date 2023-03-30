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
            title: 'Macrocosm',
            description: 'Move the planets',
            roles: [
                { name: 'Light Reader', type: 'reader' },
                { name: 'Light Far Plate', type: 'soldier' },
                { name: 'Light Near Plate', type: 'soldier' },
                { name: 'Dark Reader', type: 'reader' },
                { name: 'Dark Far Plate', type: 'soldier' },
                { name: `Dark Near Plate`, type: 'soldier' }
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