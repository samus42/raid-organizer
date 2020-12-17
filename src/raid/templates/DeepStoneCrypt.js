const DeepStoneCrypt = () => ({
    raidName: 'Deep Stone Crypt',
    stages: [
        {
            title: 'Security',
            description: 'Both starting scanner and operator start on dark side. The designations are for where they go if we need a 2nd phase.',
            roles: [
                { name: 'Starting Scanner - Light', type: 'scanner' },
                { name: 'Starting Operator - Dark', type: 'operator' },
                { name: 'Backup Scanner - Dark', type: 'scanner' },
                { name: 'Backup Operator - Light', type: 'operator' },
                { name: 'Dark Soldier', type: 'soldier' },
                { name: 'Light Soldier', type: 'soldier' }
            ]
        },
        {
            title: 'Atracks-1',
            description: 'Operator is always in space, scanners trade off between boss damage.',
            roles: [
                { name: 'Space - Operator', type: 'operator' },
                { name: 'Space - Scanner', type: 'scanner' },
                { name: 'Space Soldier', type: 'soldier' },
                { name: 'Crypt - Scanner', type: 'scanner' },
                { name: 'Crypt Soldier 1', type: 'soldier' },
                { name: 'Crypt Soldier 2', type: 'soldier' },
            ]
        },
        {
            title: 'Nuclear Disposal',
            description: 'Roles will shift base on broken augments. Active Supressor never picks up the bomb. Bomb teams are Scanners & Operators.',
            roles: [
                { name: 'Starting Operator', type: 'operator' },
                { name: 'Starting Scanner', type: 'scanner' },
                { name: 'Starting Suppressor', type: 'suppressor' },
                { name: 'Backup Operator', type: 'operator' },
                { name: 'Backup Scanner', type: 'scanner' },
                { name: 'Backup Suppressor', type: 'suppressor' },
            ]
        },
        {
            title: 'Taniks',
            description: 'Roles will shift base on broken augments. Active Supressor & Operator never picks up the bomb. Bomb teams are Scanners, and the 2 other backups.',
            roles: [
                { name: 'Starting Operator', type: 'operator' },
                { name: 'Starting Scanner', type: 'scanner' },
                { name: 'Starting Supressor', type: 'suppressor' },
                { name: 'Backup Operator', type: 'operator' },
                { name: 'Backup Scanner', type: 'scanner' },
                { name: 'Backup Supressor', type: 'suppressor' },
            ]
        }
    ]
})

export default DeepStoneCrypt