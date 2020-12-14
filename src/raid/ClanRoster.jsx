import React, { useEffect, useState } from 'react'
import { getClanRoster } from '../api/destiny'

const ClanRoster = () => {
    const [roster, setRoster] = useState([])

    useEffect(() => {
        const getRoster = async () => {
            const results = await getClanRoster()
            console.log(results)
            setRoster(roster)
        }
        getRoster()
    })

    return (<div>Roster</div>)
}

export default ClanRoster