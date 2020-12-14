import React, { useState, useEffect } from 'react'
import { List, ListItem, ListItemGraphic, ListItemText } from '@rmwc/list'
import { defaultIconUrl } from '../api/destiny'

const emptyPlayer = { name: 'Select a player', iconPath: defaultIconUrl, destinyId: null }
const raidSlots = 6

const RaidRoster = ({ roster = [], onRosterChange = () => { } }) => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        const emptySpots = raidSlots - roster.length
        const arr = Array(emptySpots)
        arr.fill(emptyPlayer)
        setPlayers(roster.concat(arr.map((item, index) => ({ ...item, name: `${item.name} ${index + 1}` }))))
    }, [roster])

    const removePlayer = (player) => {
        onRosterChange(players.filter((p) => p.destinyId && p.destinyId !== player.destinyId))
    }

    return (
        <div>
            <h4>Select your roster</h4>
            <p>Choose players on the left. To remove a player just click on the player in the roster.</p>
            <List>
                {players.map((player) => (
                    <ListItem key={player.name} onClick={() => removePlayer(player)}>
                        <ListItemGraphic icon={<img src={player.iconPath} alt="" width="24" height="24" />} />
                        <ListItemText>{player.name}</ListItemText>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default RaidRoster