import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Typography } from '@rmwc/typography'
import raidClient from '../api/raidClient'
import gql from 'graphql-tag'
import { List, SimpleListItem } from '@rmwc/list'
import dayjs from 'dayjs'

const listRaidsQuery = gql`
    query {
        raids: listRaids {
            id
            raidName
            instanceName
            date
        }
    }
`
const ActiveRaidList = () => {
    const [raids, setRaids] = useState([])
    const [loading, setLoading] = useState(true)
    const history = useHistory()
    useEffect(() => {
        const loadRaids = async () => {
            setLoading(true)
            const { data } = await raidClient.query({ query: listRaidsQuery })
            setRaids(data.raids)
            setLoading(false)
        }
        loadRaids()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }
    if (raids.length < 1) {
        return <div>No active raids</div>
    }
    const onSelectRaid = (raid) => {
        history.push(`/raid/${raid.id}`)
    }
    return (
        <div style={{ maxWidth: '500px' }}>
            <Typography use="headline4">Upcoming raids:</Typography>
            <List twoLine>
                {raids.map((raid) => (
                    <SimpleListItem onClick={() => onSelectRaid(raid)} key={raid.id} text={`${raid.instanceName}`} secondaryText={`${dayjs(raid.date).format('MM/DD/YYYY hh:mm:ss a')}`} meta={raid.raidName} />
                ))}
            </List>
        </div>
    )
}

export default ActiveRaidList