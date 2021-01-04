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
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import changePosition from './changePosition'
import differenceBy from 'lodash.differenceby'

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
    const [instanceName, setInstanceName] = useState('')
    const [date, setDate] = useState(new Date())
    const history = useHistory()
    const [saveMessage, setSaveMessage] = useState('')


    useEffect(() => {
        const loadRaid = async () => {
            const { data } = await raidClient.query({ query: loadRaidQuery, variables: { id: match.params.raidKey } })
            setRaid(data.raid)
            setInstanceName(data.raid.instanceName)
            setDate(new Date(data.raid.date))
            setCurrentRoster(data.raid.roster)
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

    const onRaidPositionChange = (stage, role, player) => {
        const newRaid = changePosition(raid, stage, role, player)
        setRaid(newRaid)
    }

    const onRaidRosterChange = (newRoster) => {
        const removed = differenceBy(currentRoster, newRoster, 'destinyId')
        if (removed.length > 0) {
            const removedIds = removed.map(({ destinyId }) => destinyId)
            const newRaid = JSON.parse(JSON.stringify(raid))
            newRaid.stages.forEach((stage) => {
                stage.roles.forEach((role) => {
                    if (role.player && removedIds.includes(role.player.destinyId)) {
                        role.player = null
                    }
                })
            })
            setRaid(newRaid)
        }
        setCurrentRoster(newRoster)
    }
    if (!raid) {
        return <div>Loading...</div>
    }
    return (
        <DndProvider backend={HTML5Backend}>
            <ClanRoster excludeList={currentRoster} onSelect={onAddPlayer} disabled={currentRoster.length > 7} />
            < div style={{ marginLeft: '260px', paddingTop: '0px' }}>
                <div style={{ position: 'fixed', width: '250px', top: '65px', bottom: '0', overflowY: 'scroll', borderRight: '1px solid lightgray' }}>
                    <RaidRoster roster={currentRoster} onRosterChange={onRaidRosterChange} raidTitle={raid.raidName} />
                </div>
                <div style={{ marginLeft: '260px', paddingTop: '0px' }}>
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

                    <div style={{ paddingLeft: '20px' }}>
                        <div style={{ paddingBottom: '10px' }}>Drag and drop players onto slots.  Once a player is in a slot, you can use that player as the starting point to drag to another stage of the raid (so you don't always have to drag from the left bar). If you drag a player over another in the same stage, they will swap roles. Or you can just hit the randomize roles button and let luck decide!</div>
                        <Button raised disabled={currentRoster.length < 6} onClick={determineRoles}>Randomize Roles</Button>
                    </div>

                    <RaidAssignments raid={raid} onChange={onRaidPositionChange} />
                    {raid.id && <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                        <Button onClick={onArchiveRaid} raised>Archive Raid To Remove From Active List</Button>

                    </div>
                    }
                </div>
            </div>

        </DndProvider >)
}

export default RaidDetails