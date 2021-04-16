import agent from 'superagent'
import sortBy from 'lodash.sortby'
import dayjs from 'dayjs'

const header = { 'X-API-KEY': process.env.REACT_APP_API_KEY }
const clientId = process.env.REACT_APP_CLIENT_ID
const clanId = 1487234

export const baseUrl = 'https://www.bungie.net'
export const defaultIconUrl = `${baseUrl}/img/theme/bungienet/icons/psnLogo.png`

let rosterCache = null

//TODO: Put this on the server side
const deprecatedMemberNames = [
    'BuzukaToof', 'Chitown726', 'columbianeddie', 'ddfed', 'Dead_Again_420', 'Deathsquid112', 'Dragonlord198369', 'Drekken79', 'dukkhah', 'jaeuu520', 'JBAKE', 'Lonomakihe', 'patbot92', 'r_oh_33', 'Skull_Krusher_97', 'StoutHouse', 'wscott42'
]

export const getClanRoster = async () => {
    if (rosterCache) {
        return rosterCache
    }
    const url = `${baseUrl}/Platform/GroupV2/${clanId}/Members`
    const { body } = await agent.get(url).set(header)
    if (body.ErrorStatus !== 'Success') {
        throw new Error(body.Message)
    }
    const members = body.Response.results.map(({ destinyUserInfo, bungieNetUserInfo }) => ({
        name: destinyUserInfo.displayName,
        iconPath: bungieNetUserInfo ? `${baseUrl}/${bungieNetUserInfo.iconPath}` : defaultIconUrl,
        destinyId: destinyUserInfo.membershipId,
    })).filter(({ name }) => !deprecatedMemberNames.includes(name))

    rosterCache = sortBy(members, ({ name }) => name.toUpperCase())
    return rosterCache
}

export const getUserAuthInfo = async (code) => {
    const url = 'https://www.bungie.net/Platform/App/OAuth/Token/'

    const { body } = await agent.post(url).type('form').send({ client_id: clientId, grant_type: 'authorization_code', code }).set(header)
    const { access_token, membership_id, expires_in, refresh_token, refresh_expires_in } = body
    const expiresOn = dayjs().add(expires_in, 'seconds')
    const refreshExpiresOn = dayjs().add(refresh_expires_in, 'seconds')
    return { token: access_token, membershipId: membership_id, expiresOn, refreshExpiresOn, refreshToken: refresh_token }
}

export const getMembershipById = async (membershipId) => {
    const url = `https://www.bungie.net/Platform/User/GetMembershipsById/${membershipId}/254`
    const { body } = await agent.get(url).set(header)
    const { destinyMemberships, bungieNetUser } = body.Response
    return { destinyMemberships, bungieNetUser }
}