import React, { useEffect } from 'react'
import { useHistory, useLocation } from "react-router-dom"
import { getUserAuthInfo, getMembershipById } from '../api/destiny'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const ProcessLogin = () => {
    const query = useQuery()
    const history = useHistory()

    useEffect(() => {
        const processCode = async (code) => {
            const authInfo = await getUserAuthInfo(code)
            const membershipInfo = await getMembershipById(authInfo.membershipId)
            window.localStorage.setItem('shenaniganizers-bungie-info', JSON.stringify(membershipInfo))
            history.push('/')
        }
        processCode(query.get('code'))
    })

    return <div>Processing....</div>
}

export default ProcessLogin