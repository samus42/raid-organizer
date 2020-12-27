const clone = (obj) => JSON.parse(JSON.stringify(obj))

const changePosition = (raid, stage, role, player) => {
    const newRaid = clone(raid)
    const foundStage = newRaid.stages.find(({ title }) => title === stage.title)
    if (!foundStage) {
        throw new Error('Could not find stage: ', stage.title)
    }
    const foundRole = foundStage.roles.find(({ name }) => name === role.name)
    if (!foundRole) {
        throw new Error('Could not find role: ', role.name)
    }
    if (!player) {
        foundRole.player = null
        return newRaid
    }
    const foundOriginalRole = foundStage.roles.find((role) => role.player && role.player.destinyId === player.destinyId)
    if (!foundOriginalRole) {
        foundRole.player = player
    }
    else {
        foundOriginalRole.player = undefined
        if (foundRole.player) {
            const tmpPlayer = foundRole.player
            foundRole.player = player
            foundOriginalRole.player = tmpPlayer
        } else {
            foundRole.player = player
        }
    }
    return newRaid
}

export default changePosition