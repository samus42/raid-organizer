import dayjs from 'dayjs'
const key = 'shenaniganizers-bungie-info'
const authKey = 'shenaniganizers-bungie-auth'
const imageUrlPrefix = 'https://www.bungie.net'

export const setMembershipInfo = (info) => {
    window.localStorage.setItem(key, JSON.stringify(info))
}

export const getMembershipInfo = () => {
    if (window.localStorage) {
        const rawInfo = window.localStorage.getItem(key)
        if (rawInfo && rawInfo !== 'null') {
            const membershipInfo = JSON.parse(rawInfo)
            return membershipInfo
        }
    }
    return null
}

export const setAuthInfo = (authInfo) => {
    window.localStorage.setItem(authKey, JSON.stringify(authInfo))
}

export const getAuthInfo = () => {
    if (window.localStorage) {
        const rawInfo = window.localStorage.getItem(authKey)
        if (rawInfo && rawInfo !== 'null') {
            const authInfo = JSON.parse(rawInfo)
            return authInfo
        }
    }
    return null
}

export const clearMembershipInfo = () => {
    window.localStorage.removeItem(key)
    window.localStorage.removeItem(authKey)
}

export const getCurrentUserInfo = () => {
    const membershipInfo = getMembershipInfo()
    if (membershipInfo) {
        const { bungieNetUser, destinyMemberships } = membershipInfo
        return {
            iconPath: `${imageUrlPrefix}${bungieNetUser.profilePicturePath}`,
            name: bungieNetUser.displayName,
            destinyId: destinyMemberships[0].membershipId
        }
    }
}

export const isAuthCurrent = () => {
    const authInfo = getAuthInfo()
    if (authInfo) {
        return dayjs().isBefore(dayjs(authInfo.expiresOn))
    }
    return false
}

export const isRefreshCurrent = () => {
    const authInfo = getAuthInfo()
    if (authInfo) {
        return dayjs().isBefore(dayjs(authInfo.refreshExpiresOn))
    }
    return false
}