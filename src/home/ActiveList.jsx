import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
    List,
    ListItemText,
    ListItemButton,
    Divider, Typography
} from '@mui/material'
import raidClient from '../api/raidClient'
import gql from 'graphql-tag'
import dayjs from 'dayjs'
import sortBy from 'lodash.sortby'

const query = gql`
    query {
        raids: listRaids {
            id
            raidName
            instanceName
            date
        },
        activities: listActivities {
            id
            type
            activityName
            instanceName
            date
        }
    }
`
const EventListItem = (({ activity, onClick }) => (
    <ListItemButton onClick={onClick}>
        <ListItemText
            primary={activity.instanceName}
            secondary={`${dayjs(activity.date).format('MM/DD/YYYY hh:mm:ss a')}`}
        />
        <ListItemText secondary={activity.activityName} />
    </ListItemButton>
))

const EventList = () => {
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const history = useHistory()
    useEffect(() => {
        const loadActivities = async () => {
            setLoading(true)
            const { data } = await raidClient.query({ query })
            const activities = data.activities.map((a) => ({ ...a, eventType: 'activity' }))
            const raids = data.raids.map((a) => ({ ...a, eventType: 'raid', activityName: a.raidName }))
            setEvents(sortBy(activities.concat(raids), 'date'))
            setLoading(false)
        }
        loadActivities()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }
    if (events.length < 1) {
        return <div>No active events</div>
    }
    const onSelectEvent = (event) => {
        if (event.eventType === 'activity') {
            history.push(`/activity/${event.id}`)
        } else {
            history.push(`/raid/${event.id}`)
        }
    }
    return (
        <div style={{ maxWidth: '500px' }}>
            <Typography use="headline4">Upcoming events:</Typography>

            <List>
                {events.map((activity) => (
                    <EventListItem key={activity.id} onClick={() => onSelectEvent(activity)} activity={activity} />
                ))}
            </List>
        </div>
    )
}

export default EventList