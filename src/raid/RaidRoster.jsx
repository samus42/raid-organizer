import React, { useState, useEffect } from 'react'
import { defaultIconUrl } from '../api/destiny'
import { SimpleListItem, List, ListItem, ListItemMeta, ListItemGraphic } from '@rmwc/list'
import { Icon } from '@rmwc/icon'
import DraggablePlayer from './DraggablePlayer'
const emptyPlayer = { name: 'Select a player', iconPath: defaultIconUrl, destinyId: null }
const raidSlots = 6

const RaidRoster = ({ roster = [], raidTitle, onRosterChange = () => { } }) => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        const emptySpots = raidSlots - roster.length
        const arr = Array(emptySpots)
        arr.fill(emptyPlayer)
        const startingNumberLabel = (raidSlots - emptySpots) + 1
        setPlayers(roster.concat(arr.map((item, index) => ({ ...item, name: `${item.name} ${index + startingNumberLabel}` }))))
    }, [roster])

    const removePlayer = (player) => {
        onRosterChange(players.filter((p) => p.destinyId && p.destinyId !== player.destinyId))
    }

    return (
        <div>
            <h4>Select your roster for {raidTitle}</h4>
            <p>Choose players on the left. To remove a player just click on the <strong>X</strong> to the right of the player.</p>
            <List>
                {players.map((player) => (
                    <ListItem span={4} key={player.name}>
                        <DraggablePlayer player={player} />
                        <ListItemMeta icon="clear" onClick={() => removePlayer(player)} />
                    </ListItem>
                ))
                }
            </List >
        </div >
    )
}

export default RaidRoster