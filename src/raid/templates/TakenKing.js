const TakenKing = () => ({
    raidName: 'Taken King',
    active: true,
    stages: [
        {
            title: 'Portal',
            description: 'Break the glass!',
            roles: [
                { name: 'Left Orb', type: 'orb' },
                { name: 'Left Escort', type: 'escort' },
                { name: 'Left Center', type: 'soldier' },
                { name: 'Right Orb', type: 'orb' },
                { name: 'Right Escort', type: 'escort' },
                { name: 'Right Center', type: 'soldier' },
            ]
        },
        {
            title: 'Relay Race',
            description: 'Always keep someone on the plate.',
            roles: [
                { name: 'Left - First', type: 'soldier' },
                { name: 'Left - Second', type: 'soldier' },
                { name: 'Left - Center', type: 'soldier' },
                { name: 'Right - First', type: 'soldier' },
                { name: 'Right - Second', type: 'soldier' },
                { name: 'Right - Center', type: 'soldier' },
            ]
        },
        {
            title: 'Warpriest',
            description: '',
            roles: [
                { name: 'Left - On Plate', type: 'soldier' },
                { name: 'Left - Knight Hunter', type: 'soldier' },
                { name: 'Center - On Plate', type: 'soldier' },
                { name: 'Center - Soldier', type: 'soldier' },
                { name: 'Right - On Plate', type: 'soldier' },
                { name: 'Right - Knight Hunter', type: 'soldier' },
            ]
        },
        {
            title: 'Golgoroth',
            description: '',
            roles: [
                { name: 'First Gaze Pull', type: 'soldier' },
                { name: 'Second Gaze Pull', type: 'soldier' },
                { name: 'Position 3', type: 'soldier' },
                { name: 'Position 4', type: 'soldier' },
                { name: 'Position 5', type: 'soldier' },
                { name: 'Position 6', type: 'soldier' },
            ]
        },
        {
            title: 'Daughters of Oryx',
            description: '',
            roles: [
                { name: 'Platform 1 (Back Left)', type: 'soldier' },
                { name: 'Platform 2 (Back Right)', type: 'soldier' },
                { name: 'Platform 3 (Front Right)', type: 'soldier' },
                { name: 'Platform 4 (Front Left)', type: 'soldier' },
                { name: 'Center Adds', type: 'soldier' },
                { name: 'Floater (Replaces whoever gets torn)', type: 'soldier' },
            ]
        },
        {
            title: 'Oryx',
            description: '',
            roles: [
                { name: 'Platform 1 (Back Left)', type: 'soldier' },
                { name: 'Platform 2 (Back Right)', type: 'soldier' },
                { name: 'Platform 3 (Front Right)', type: 'soldier' },
                { name: 'Platform 4 (Front Left)', type: 'soldier' },
                { name: 'Center Adds', type: 'soldier' },
                { name: 'Floater (Replaces whoever gets torn)', type: 'soldier' },
            ]
        },
    ]
})

export default TakenKing