import React, { useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom"
import { getUserAuthInfo, getMembershipById } from '../api/destiny'
import { setMembershipInfo, setAuthInfo } from './currentUser'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const ProcessLogin = () => {
    const query = useQuery()
    const navigate = useNavigate()

    useEffect(() => {
        const processCode = async (code) => {
            const authInfo = await getUserAuthInfo(code)
            const membershipInfo = await getMembershipById(authInfo.membershipId)
            setMembershipInfo(membershipInfo)
            setAuthInfo(authInfo)
            navigate('/')
        }
        processCode(query.get('code'))
    })

    return <div>Processing....</div>
}

export default ProcessLogin