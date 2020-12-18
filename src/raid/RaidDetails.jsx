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

const saveGameMutation = gql`
    mutation ($raid: RaidInput!) {
        raid: saveRaid(raid: $raid) {id}
    }    
`

const loadRaidQuery = gql`
    fragment PlayerInfo on Player {
        destinyId, name, iconPath
    }
    query ($id: ID!) {
        raid: getRaid(id: $id) {
            id, raidName, instanceName, date,
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
    console.log('match: ', match)
    const [currentRoster, setCurrentRoster] = useState([])
    const [raid, setRaid] = useState()
    const [displayRoles, setDisplayRoles] = useState(false)
    const [instanceName, setInstanceName] = useState('')
    const [date, setDate] = useState(new Date())
    const history = useHistory()

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
        const payload = { ...raid, roster: currentRoster, instanceName, date }
        const { data } = await raidClient.mutate({ mutation: saveGameMutation, variables: { raid: payload } })
        setRaid({ ...raid, id: data.raid.id })
        history.push(`/raid/${data.raid.id}`)
    }

    if (!raid) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <ClanRoster excludeList={currentRoster} onSelect={onAddPlayer} disabled={currentRoster.length > 5} />
            < div style={{ marginLeft: '260px', paddingTop: '0px' }}>
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
                        <Button raised disabled={instanceName.length < 1 || !date} onClick={onSave}>Save Details</Button>
                    </GridCell>
                </Grid>
                <RaidRoster roster={currentRoster} onRosterChange={setCurrentRoster} raidTitle={raid.raidName} />
                <div>
                    <Button raised disabled={currentRoster.length < 6} onClick={determineRoles}>Randomize Roles</Button>
                </div>
                {
                    displayRoles && (<RaidAssignments raid={raid} />)
                }
            </div>

        </div >)
}

export default RaidDetails