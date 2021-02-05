import gql from 'graphql-tag'
import raidClient from './raidClient'
import omitDeep from 'omit-deep-lodash'

const saveRaidMutation = gql`
    mutation ($raid: RaidInput!) {
        raid: saveRaid(raid: $raid) {id}
    }    
`

const archiveRaidMutation = gql`
    mutation ($id: ID!) {
        raid: archiveRaid(id: $id) {id}
    }    
`

const loadRaidQuery = gql`
    fragment PlayerInfo on Player {
        destinyId, name, iconPath
    }
    query ($id: ID!) {
        raid: getRaid(id: $id) {
            id, raidName, instanceName, date, active
            stages {
                title, description
                roles {
                    name, type, 
                    player {...PlayerInfo}
                }
            }
            roster {
                ...PlayerInfo
            }
        }
    }
`

export const loadRaid = async (raidKey) => {
    const { data } = await raidClient.query({ query: loadRaidQuery, variables: { id: raidKey } })
    return data.raid
}

export const saveRaid = async (raid) => {
    const payload = omitDeep(raid, '__typename', 'active')
    const { data } = await raidClient.mutate({ mutation: saveRaidMutation, variables: { raid: payload } })
    return { ...raid, id: data.raid.id }
}

export const archiveRaid = async (raid) => {
    await raidClient.mutate({ mutation: archiveRaidMutation, variables: { id: raid.id } })
}