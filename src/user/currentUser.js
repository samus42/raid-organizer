const key = 'shenaniganizers-bungie-info'
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

export const clearMembershipInfo = () => {
    window.localStorage.removeItem(key)
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