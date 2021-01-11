import _ from 'lodash'

const calculateMetrics = (destinyId, raids) => {
    const raidMap = _.groupBy(raids, 'raidName')

    const determineRaidMetrics = (raidSet) => {
        const allRoles = _.flatten(raidSet.map(({ stages }) => _.flatMap(stages, 'roles')))
        const playerRoles = allRoles.filter(({ player }) => player && player.destinyId === destinyId)
        const groups = _.groupBy(playerRoles, 'type')
        return _.mapValues(groups, (arr) => arr.length)
    }
    return Object.keys(raidMap).map((key) => {
        const raidSet = raidMap[key]
        return {
            raidName: key,
            numRuns: raidSet.length,
            roleTypes: determineRaidMetrics(raidSet),
        }
    })
}

export default calculateMetrics