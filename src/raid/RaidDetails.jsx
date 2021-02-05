import React from 'react'
import ClanRoster from './ClanRoster'
import RaidRoster from './RaidRoster'
import { Button } from '@rmwc/button'
import { TextField } from '@rmwc/textfield'
import { Grid, GridCell } from '@rmwc/grid'
import randomizeRaidAssignments from './randomizeRaidAssignments'
import RaidAssignments from './RaidAssignments'
import DateTimePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import changePosition from './changePosition'
import differenceBy from 'lodash.differenceby'

const RaidDetails = ({ roster, date, instanceName, raid, saveEnabled, onSave, onArchive, onChangeRaid, onDetailsChange, onRosterChange }) => {

    const onAddPlayer = (player) => {
        onRosterChange(roster.concat(player))
    }

    const determineRoles = () => {
        onChangeRaid(randomizeRaidAssignments({ raid, roster }))
    }

    const onRaidPositionChange = (stage, role, player) => {
        const newRaid = changePosition(raid, stage, role, player)
        onChangeRaid(newRaid)
    }

    const onRaidRosterChange = (newRoster) => {
        const removed = differenceBy(roster, newRoster, 'destinyId')
        console.log('removed: ', removed)
        if (removed.length > 0) {
            const removedIds = removed.map(({ destinyId }) => destinyId)
            const newRaid = JSON.parse(JSON.stringify(raid))
            newRaid.stages.forEach((stage) => {
                stage.roles.forEach((role) => {
                    if (role.player && removedIds.includes(role.player.destinyId)) {
                        console.log('removed')
                        role.player = null
                    }
                })
            })
            onChangeRaid(newRaid)
        }
        onRosterChange(newRoster)
    }
    if (!raid) {
        return <div>Loading...</div>
    }
    return (
        <DndProvider backend={HTML5Backend}>
            <ClanRoster excludeList={roster} onSelect={onAddPlayer} disabled={roster.length > 7} />
            < div style={{ marginLeft: '260px', paddingTop: '0px' }}>
                <div style={{ position: 'fixed', width: '250px', top: '65px', bottom: '0', overflowY: 'scroll', borderRight: '1px solid lightgray' }}>
                    <RaidRoster roster={roster} onRosterChange={onRaidRosterChange} raidTitle={raid.raidName} />
                </div>
                <div style={{ marginLeft: '260px', paddingTop: '0px' }}>
                    {!raid.active && <h2>This raid is no longer active!</h2>}
                    <Grid>
                        <GridCell>
                            <TextField style={{ width: '100%' }} label="Create a name for this run!" value={instanceName} onChange={(evt) => onDetailsChange({ instanceName: evt.target.value, date })} />
                        </GridCell>
                        <GridCell>
                            <label>What time do you want to go?</label>
                            <DateTimePicker
                                onChange={(val) => onDetailsChange({ instanceName, date: val })}
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
                            </div>
                        </GridCell>
                    </Grid>

                    <div style={{ paddingLeft: '20px' }}>
                        <div style={{ paddingBottom: '10px' }}>Drag and drop players onto slots.  Once a player is in a slot, you can use that player as the starting point to drag to another stage of the raid (so you don't always have to drag from the left bar). If you drag a player over another in the same stage, they will swap roles. Or you can just hit the randomize roles button and let luck decide!</div>
                        <Button raised disabled={roster.length < 6} onClick={determineRoles}>Randomize Roles</Button>
                    </div>

                    <RaidAssignments raid={raid} onChange={onRaidPositionChange} />
                    {raid.id && <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                        <Button onClick={onArchive} raised>Archive Raid To Remove From Active List</Button>

                    </div>
                    }
                </div>
            </div>

        </DndProvider >)
}

export default RaidDetails