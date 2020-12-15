import shuffle from 'lodash.shuffle'

const randomizeRaidAssignments = ({ raid, roster }) => {
    const stages = raid.stages.map((stage) => {
        const shuffled = shuffle(roster)
        return {
            ...stage,
            roles: stage.roles.map((role, index) => ({
                ...role, player: shuffled[index]
            }))
        }
    })
    return { stages }
}

export default randomizeRaidAssignments