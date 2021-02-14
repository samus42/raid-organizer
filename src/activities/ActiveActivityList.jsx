import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Typography } from '@rmwc/typography'
import raidClient from '../api/raidClient'
import gql from 'graphql-tag'
import { List, SimpleListItem } from '@rmwc/list'
import dayjs from 'dayjs'

const listActivitiesQuery = gql`
    query {
        activities: listActivities {
            id
            type
            activityName
            instanceName
            date
        }
    }
`
const ActiveActivityList = () => {
    const [activities, setActivities] = useState([])
    const [loading, setLoading] = useState(true)
    const history = useHistory()
    useEffect(() => {
        const loadActivities = async () => {
            setLoading(true)
            const { data } = await raidClient.query({ query: listActivitiesQuery })
            setActivities(data.activities)
            setLoading(false)
        }
        loadActivities()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }
    if (activities.length < 1) {
        return <div>No active activies</div>
    }
    const onSelectActivity = (activity) => {
        history.push(`/activity/${activity.id}`)
    }
    return (
        <div style={{ maxWidth: '500px' }}>
            <Typography use="headline4">Upcoming activities:</Typography>
            <List twoLine>
                {activities.map((activity) => (
                    <SimpleListItem onClick={() => onSelectActivity(activity)} key={activity.id} text={`${activity.instanceName}`} secondaryText={`${dayjs(activity.date).format('MM/DD/YYYY hh:mm:ss a')}`} meta={activity.activityName} />
                ))}
            </List>
        </div>
    )
}

export default ActiveActivityList