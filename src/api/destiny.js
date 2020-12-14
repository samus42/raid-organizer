import agent from 'superagent'
import sortBy from 'lodash.sortby'
const header = { 'X-API-KEY': process.env.REACT_APP_API_KEY }
const clanId = 1487234

export const baseUrl = 'https://www.bungie.net'
export const defaultIconUrl = `${baseUrl}/img/theme/bungienet/icons/psnLogo.png`

let rosterCache = null

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
    }))

    rosterCache = sortBy(members, ({ name }) => name.toUpperCase())
    return rosterCache
}