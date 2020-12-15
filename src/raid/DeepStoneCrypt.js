const DeepStoneCrypt = {
    title: 'Deep Stone Crypt',
    stages: [
        {
            title: 'Security',
            description: 'Both starting scanner and operator start on dark side. The designations are for where they go if we need a 2nd phase.',
            roles: [
                { name: 'Starting Scanner - Light' },
                { name: 'Starting Operator - Dark' },
                { name: 'Backup Scanner - Dark' },
                { name: 'Backup Operator - Light' },
                { name: 'Dark Soldier' },
                { name: 'Light Soldier' }
            ]
        },
        {
            title: 'Atracks-1',
            description: 'Operator is always in space, scanners trade off between boss damage.',
            roles: [
                { name: 'Space - Operator' },
                { name: 'Space - Scanner' },
                { name: 'Space Soldier' },
                { name: 'Crypt - Scanner' },
                { name: 'Crypt Soldier 1' },
                { name: 'Crypt Soldier 2' },
            ]
        },
        {
            title: 'Nuclear Disposal',
            description: 'Roles will shift base on broken augments. Active Supressor never picks up the bomb. Bomb teams are Scanners & Operators.',
            roles: [
                { name: 'Starting Operator' },
                { name: 'Starting Scanner' },
                { name: 'Starting Supressor' },
                { name: 'Backup Operator' },
                { name: 'Backup Scanner' },
                { name: 'Backup Supressor' },
            ]
        },
        {
            title: 'Taniks',
            description: 'Roles will shift base on broken augments. Active Supressor & Operator never picks up the bomb. Bomb teams are Scanners, and the 2 other backups.',
            roles: [
                { name: 'Starting Operator' },
                { name: 'Starting Scanner' },
                { name: 'Starting Supressor' },
                { name: 'Backup Operator' },
                { name: 'Backup Scanner' },
                { name: 'Backup Supressor' },
            ]
        }
    ]
}

export default DeepStoneCrypt