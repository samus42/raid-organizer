import React, { useState, useEffect } from 'react'
import { defaultIconUrl } from '../api/destiny'
import { List, ListItem, Button, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/PersonRemove'
import { getCurrentUserInfo } from '../user/currentUser'
import DraggablePlayer from './DraggablePlayer'
import SelectNonClanMember from './SelectNonClanMember'
const emptyPlayer = { name: 'Select a player', iconPath: defaultIconUrl, destinyId: null }
const raidSlots = 6
const backupSlots = 2

const RaidRoster = ({ roster = [], saveEnabled, raidTitle, onRosterChange = () => { } }) => {
    const [players, setPlayers] = useState([])
    const [currentUserAdded, setCurrentUserAdded] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)
    const [isFull, setIsFull] = useState(false)
    useEffect(() => {
        const emptySpots = Math.max(0, raidSlots - roster.length)
        const backupSpots = Math.max(0, (raidSlots + backupSlots) - Math.max(roster.length, raidSlots))
        const emptyRaidSlotArr = Array(emptySpots)
        const emptyBackupSlotArr = Array(backupSpots)
        emptyRaidSlotArr.fill(emptyPlayer)
        emptyBackupSlotArr.fill(emptyPlayer)
        const startingNumberLabel = (raidSlots - emptySpots) + 1
        setPlayers(
            roster
                .concat(emptyRaidSlotArr.map((item, index) => ({ ...item, name: `${item.name} ${index + startingNumberLabel}` })))
                .concat(emptyBackupSlotArr.map((item, index) => ({ ...item, name: `Backup ${index + 1}` })))
        )
        const user = getCurrentUserInfo()
        setIsFull(roster.length >= raidSlots + backupSlots)
        setCurrentUser(user)
        setCurrentUserAdded(user && !!roster.find((player) => player.destinyId === user.destinyId))
    }, [roster])

    const removePlayer = (player) => {
        onRosterChange(players.filter((p) => p.destinyId && p.destinyId !== player.destinyId))
    }

    const memberChanged = () => {
        const currentUser = getCurrentUserInfo()
        if (currentUserAdded) {
            onRosterChange(roster.filter((player) => player.destinyId !== currentUser.destinyId))
        } else {
            onRosterChange(roster.concat(currentUser))
        }
    }

    const addNonClanMember = (player) => {
        onRosterChange(roster.concat(player))
    }

    return (
        <div>
            <h4>Select your roster for {raidTitle}</h4>
            <p>Choose players on the left. To remove a player just click on the <strong>X</strong> to the right of the player.</p>
            <List>
                {players.map((player) => (
                    <ListItem span={4} key={player.name}
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete" onClick={() => removePlayer(player)}>
                                <DeleteIcon />
                            </IconButton>
                        }>
                        <DraggablePlayer player={player} />

                    </ListItem>
                ))
                }
            </List >
            {currentUser &&
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" disabled={!saveEnabled || !currentUser || isFull} onClick={memberChanged}>{currentUserAdded ? 'Remove Myself' : 'Add Myself'}</Button>
                </div>
            }
            <div style={{ paddingTop: '20px', display: 'flex', justifyContent: 'center' }}>
                <SelectNonClanMember disabled={isFull} onSelected={addNonClanMember} />
            </div>
        </div >
    )
}

export default RaidRoster