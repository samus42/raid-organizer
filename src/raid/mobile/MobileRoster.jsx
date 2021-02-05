import React, { useState, useEffect } from 'react'
import { Button } from '@rmwc/button'
import { defaultIconUrl } from '../../api/destiny'
import { getCurrentUserInfo } from '../../user/currentUser'

const raidSlots = 6
const backupSlots = 2
const emptyPlayer = { name: 'Slot Open', iconPath: defaultIconUrl, destinyId: null }

const PlayerSlot = ({ player }) => (
    <div style={{ display: 'flex', padding: '15px', justifyContent: 'center' }} >
        <img src={player.iconPath || player.profilePictureUrl} style={{ width: '24px', height: '24px' }} alt="" /><div style={{ paddingLeft: '5px' }}>{player.name}</div>
    </div>
)

const MobileRoster = ({ roster = [], saveEnabled, onRosterChange = () => { } }) => {
    const [players, setPlayers] = useState([])
    const [currentUserAdded, setCurrentUserAdded] = useState(false)

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
        const { destinyId } = getCurrentUserInfo()
        setCurrentUserAdded(!!roster.find((player) => player.destinyId === destinyId))
    }, [roster])

    const memberChanged = () => {
        const currentUser = getCurrentUserInfo()
        console.log(currentUser)
        if (currentUserAdded) {
            onRosterChange(roster.filter((player) => player.destinyId !== currentUser.destinyId))
        } else {
            onRosterChange(roster.concat(currentUser))
        }
    }
    return (
        <div>
            <div style={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '10px' }}>
                <Button raised disabled={!saveEnabled} onClick={memberChanged}>{currentUserAdded ? 'Remove Myself' : 'Add Myself'}</Button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {players.map((player, index) => <PlayerSlot key={`player_${index}`} player={player} />)}
            </div>
        </div>
    )
}

export default MobileRoster