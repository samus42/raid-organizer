const AmongUs = () => ({
    type: 'amongus',
    activityName: 'Among Us',
    players: [],
    maxPlayers: 10,
    info: '',
})

const activityMap = {
    amongus: AmongUs
}


export const newActivityByKey = (key) => {
    if (!activityMap[key]) {
        throw new Error('No activity for key: ', key)
    }
    const newActivity = activityMap[key]()
    newActivity.active = true
    return newActivity
}

export const isActivityKey = (key) => !!activityMap[key]