import React, { useEffect, useState } from 'react'
import ClanRoster from './ClanRoster'
import RaidRoster from './RaidRoster'
import { Button } from '@rmwc/button'
import { TextField } from '@rmwc/textfield'
import { Grid, GridCell } from '@rmwc/grid'
import { newRaidByKey, isRaidKey } from './templates'
import randomizeRaidAssignments from './randomizeRaidAssignments'
import RaidAssignments from './RaidAssignments'
import DateTimePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import raidClient from '../api/raidClient'
import gql from 'graphql-tag'
import { useHistory } from "react-router-dom";
import omitDeep from 'omit-deep-lodash'

const saveRaidMutation = gql`
    mutation ($raid: RaidInput!) {
        raid: saveRaid(raid: $raid) {id}
    }    
`

const archiveRaidMutation = gql`
    mutation ($id: ID!) {
        raid: archiveRaid(id: $id) {id}
    }    
`

const loadRaidQuery = gql`
    fragment PlayerInfo on Player {
        destinyId, name, iconPath
    }
    query ($id: ID!) {
        raid: getRaid(id: $id) {
            id, raidName, instanceName, date, active
            stages {
                title, description
                roles {
                    name, type, 
                    player {...PlayerInfo}
                }
            }
            roster {
                ...PlayerInfo
            }
        }
    }
`


const RaidDetails = ({ match }) => {
    const [currentRoster, setCurrentRoster] = useState([])
    const [raid, setRaid] = useState()
    const [displayRoles, setDisplayRoles] = useState(false)
    const [instanceName, setInstanceName] = useState('')
    const [date, setDate] = useState(new Date())
    const history = useHistory()
    const [saveMessage, setSaveMessage] = useState('')

    useEffect(() => {
        const loadRaid = async () => {
            const { data } = await raidClient.query({ query: loadRaidQuery, variables: { id: match.params.raidKey } })
            console.log('loaded: ', data)
            setRaid(data.raid)
            setInstanceName(data.raid.instanceName)
            setDate(new Date(data.raid.date))
            setCurrentRoster(data.raid.roster)

            setDisplayRoles(!!data.raid.stages[0].roles[0].player)
        }
        if (isRaidKey([match.params.raidKey])) {
            setRaid(newRaidByKey(match.params.raidKey))
        } else {
            loadRaid()
        }
    }, [match])

    const onAddPlayer = (player) => {
        setCurrentRoster(currentRoster.concat(player))
    }

    const determineRoles = () => {
        setRaid(randomizeRaidAssignments({ raid, roster: currentRoster }))
        setDisplayRoles(true)
    }

    const onSave = async () => {
        const isNew = !raid.id
        const payload = omitDeep({ ...raid, roster: currentRoster, instanceName, date }, '__typename', 'active')
        const { data } = await raidClient.mutate({ mutation: saveRaidMutation, variables: { raid: payload } })
        setRaid({ ...raid, id: data.raid.id })
        if (isNew) {
            history.push(`/raid/${data.raid.id}`)
            setSaveMessage('Raid saved! You can now share the URL in the browser with others.')
        } else {
            setSaveMessage('Raid updated!')
        }
    }

    const onArchiveRaid = async () => {
        await raidClient.mutate({ mutation: archiveRaidMutation, variables: { id: raid.id } })
        setRaid({ ...raid, active: false })
    }

    if (!raid) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <ClanRoster excludeList={currentRoster} onSelect={onAddPlayer} disabled={currentRoster.length > 5} />
            < div style={{ marginLeft: '260px', paddingTop: '0px' }}>
                {!raid.active && <h2>This raid is no longer active!</h2>}
                <Grid>
                    <GridCell>
                        <TextField style={{ width: '100%' }} label="Create a name for this run!" value={instanceName} onChange={(evt) => setInstanceName(evt.target.value)} />
                    </GridCell>
                    <GridCell>
                        <label>What time do you want to go?</label>
                        <DateTimePicker
                            onChange={(val) => setDate(val)}
                            selected={date}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={5}
                            timeCaption="time"
                            dateFormat="iii MM/dd hh:mm a" />
                    </GridCell>
                    <GridCell>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Button style={{ marginBottom: '10px' }} raised disabled={instanceName.length < 1 || !date} onClick={onSave}>Save Details</Button>
                            <div><small>{saveMessage}</small></div>
                        </div>
                    </GridCell>
                </Grid>
                <RaidRoster roster={currentRoster} onRosterChange={setCurrentRoster} raidTitle={raid.raidName} />
                <div>
                    <Button raised disabled={currentRoster.length < 6} onClick={determineRoles}>Randomize Roles</Button>
                </div>
                {
                    displayRoles && (<RaidAssignments raid={raid} />)
                }
                {raid.id && <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                    <Button onClick={onArchiveRaid} raised>Archive Raid To Remove From Active List</Button>

                </div>
                }
            </div>

        </div >)
}

export default RaidDetails