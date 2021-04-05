const VaultOfGlass = () => ({
    raidName: 'Vault Of Glass',
    active: true,
    stages: [
        {
            title: 'Opening The Vault',
            description: '',
            roles: [
                { name: 'Left Plate 1', type: 'soldier' },
                { name: 'Left Plate 2', type: 'soldier' },
                { name: 'Center Plate 1', type: 'soldier' },
                { name: 'Center Plate 2', type: 'soldier' },
                { name: 'Right Plate 1', type: 'soldier' },
                { name: 'Right Plate 2', type: 'soldier' },
            ]
        },
        {
            title: `Confluxes`,
            description: '',
            roles: [
                { name: 'Left 1', type: 'soldier' },
                { name: 'Left 2', type: 'soldier' },
                { name: 'Center 1', type: 'soldier' },
                { name: 'Center 2', type: 'soldier' },
                { name: 'Right 1', type: 'soldier' },
                { name: 'Right 2', type: 'soldier' },
            ]
        },
        {
            title: `Oracles`,
            description: '',
            roles: [
                { name: 'Left 1', type: 'soldier' },
                { name: 'Left 2', type: 'soldier' },
                { name: 'Center 1', type: 'soldier' },
                { name: 'Center 2', type: 'soldier' },
                { name: 'Right 1', type: 'soldier' },
                { name: 'Right 2', type: 'soldier' },
            ]
        },
        {
            title: `Templar`,
            description: '',
            roles: [
                { name: 'Relic Holder', type: 'relic' },
                { name: 'Oracle Hunter', type: 'hunter' },
                { name: 'Soldier 1', type: 'soldier' },
                { name: 'Soldier 2', type: 'soldier' },
                { name: 'Soldier 3', type: 'soldier' },
                { name: 'Soldier 4', type: 'soldier' },
            ]
        },
        {
            title: `Gorgons`,
            description: '',
            roles: [
                { name: 'Runs into an Gorgon around a corner', type: 'soldier' },
                { name: 'Leads without checking to see if anyone is following', type: 'soldier' },
                { name: 'Spotted from Double Jumping', type: 'soldier' },
                { name: 'Gets lost', type: 'soldier' },
                { name: 'Tries to kill the Gorgons', type: 'soldier' },
                { name: `Gets to the end then realizes they didn't open the chest`, type: 'soldier' },
            ]
        },
        {
            title: `Gatekeeper`,
            description: '',
            roles: [
                { name: 'Mars Relic', type: 'relic' },
                { name: 'Mars Escort', type: 'escort' },
                { name: 'Venus Relic', type: 'relic' },
                { name: 'Venus Escort', type: 'escort' },
                { name: 'Minotaur Hunter', type: 'hunter' },
                { name: 'Flex Soldier', type: 'soldier' },
            ]
        },
        {
            title: `Atheon`,
            description: '',
            roles: [
                { name: 'Grabs relic no matter what', type: 'soldier' },
                { name: 'Tries but never can grab relic', type: 'soldier' },
                { name: `Can't jump on top of pillar and gets blown up`, type: 'soldier' },
                { name: 'Fires rocket inside Titan bubble', type: 'soldier' },
                { name: 'Runs too far ahead of relic holder and goes blind', type: 'soldier' },
                { name: 'Cannot figure out how to shoot the oracles', type: 'soldier' },
            ]
        },
    ]
})

export default VaultOfGlass