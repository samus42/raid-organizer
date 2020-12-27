import shuffle from 'lodash.shuffle'

const randomizeRaidAssignments = ({ raid, roster }) => {
    const stages = raid.stages.map((stage) => {
        const shuffled = shuffle(roster.slice(0, 6))
        return {
            ...stage,
            roles: stage.roles.map((role, index) => ({
                ...role, player: shuffled[index]
            }))
        }
    })
    return { ...raid, stages }
}

export default randomizeRaidAssignments