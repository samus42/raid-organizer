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
    fragment PlayerInfo on DestinyPlayer {
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

const saveActivityMutation = gql`
    mutation ($activity: ActivityInput!) {
        activity: saveActivity(activity: $activity) {id, version}
    }    
`

const archiveActivityMutation = gql`
    mutation ($id: ID!) {
        activity: archiveActivity(id: $id) {id}
    }    
`

const loadActivityQuery = gql`
    fragment PlayerInfo on ActivityPlayer {
        name, id, type
    }
    query ($id: ID!) {
        activity: getActivity(id: $id) {
            id, type, instanceName, date, active
            maxPlayers, info, version
            players {
                ...PlayerInfo
            }
        }
    }
`

export const loadActivity = async (activityKey) => {
    const { data } = await raidClient.query({ query: loadActivityQuery, variables: { id: activityKey } })
    return data.activity
}

export const saveActivity = async (activity) => {
    const payload = omitDeep(activity, '__typename', 'active')
    const { data } = await raidClient.mutate({ mutation: saveActivityMutation, variables: { activity: payload } })
    return { ...activity, id: data.activity.id, version: data.activity.version }
}

export const archiveActivity = async (activity) => {
    await raidClient.mutate({ mutation: archiveActivityMutation, variables: { id: activity.id } })
}