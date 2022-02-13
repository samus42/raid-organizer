import React from 'react'
import ClanRoster from './ClanRoster'
import RaidRoster from './RaidRoster'
import { Button, TextField, Stack } from '@mui/material'
import randomizeRaidAssignments from './randomizeRaidAssignments'
import RaidAssignments from './RaidAssignments'
import DateTimePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { changeRaidPosition } from './changePosition'

const RaidDetails = ({ roster, date, instanceName, raid, saveEnabled, onSave, onArchive, onChangeRaid, onDetailsChange, onRosterChange }) => {

    const onAddPlayer = (player) => {
        onRosterChange(roster.concat(player))
    }

    const determineRoles = () => {
        onChangeRaid(randomizeRaidAssignments({ raid, roster }))
    }

    const onRaidPositionChange = (stage, role, player) => {
        const newRaid = changeRaidPosition(raid, stage, role, player)
        onChangeRaid(newRaid)
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <ClanRoster excludeList={roster} onSelect={onAddPlayer} disabled={roster.length > 7} />
            < div style={{ marginLeft: '260px', paddingTop: '0px' }}>
                <div style={{ position: 'fixed', width: '250px', top: '65px', bottom: '0', overflowY: 'scroll', borderRight: '1px solid lightgray' }}>
                    <RaidRoster roster={roster} onRosterChange={onRosterChange} raidTitle={raid.raidName} saveEnabled={saveEnabled} />
                </div>
                <div style={{ marginLeft: '260px', paddingTop: '20px', paddingLeft: '20px', paddingRight: '20px' }}>
                    {!raid.active && <h2>This raid is no longer active!</h2>}
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <div style={{ width: '250px' }}>
                            <TextField fullWidth variant="filled" label="Create a name for this run!" value={instanceName} onChange={(evt) => onDetailsChange({ instanceName: evt.target.value, date })} />
                        </div>
                        <div>
                            <div>
                                <label>What time do you want to go?</label>
                            </div>
                            <DateTimePicker
                                onChange={(val) => onDetailsChange({ instanceName, date: val })}
                                selected={date}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={5}
                                timeCaption="time"
                                dateFormat="iii MM/dd hh:mm a" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Button style={{ marginBottom: '10px' }} variant="contained" disabled={instanceName.length < 1 || !date} onClick={onSave}>Save Details</Button>
                        </div>
                    </Stack>

                    <div style={{ paddingLeft: '0px', paddingTop: '10px' }}>
                        <div style={{ paddingBottom: '10px' }}>Drag and drop players onto slots.  Once a player is in a slot, you can use that player as the starting point to drag to another stage of the raid (so you don't always have to drag from the left bar). If you drag a player over another in the same stage, they will swap roles. Or you can just hit the randomize roles button and let luck decide!</div>
                        <Button variant="contained" disabled={roster.length < 6} onClick={determineRoles}>Randomize Roles</Button>
                    </div>

                    <RaidAssignments raid={raid} onChange={onRaidPositionChange} />
                    {raid.id && <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                        <Button onClick={onArchive} variant="contained">Archive Raid To Remove From Active List</Button>

                    </div>
                    }
                </div>
            </div>

        </DndProvider >)
}

export default RaidDetails