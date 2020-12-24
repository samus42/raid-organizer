import React, { useState, useEffect } from 'react'
import { defaultIconUrl } from '../api/destiny'
import { Grid, GridCell } from '@rmwc/grid'
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
            <p>Choose players on the left. To remove a player just click on the player in the roster.</p>
            <Grid>
                {players.map((player) => (
                    <GridCell span={4} key={player.name} onClick={() => removePlayer(player)}>
                        <div className="raid-roster-slot">
                            <DraggablePlayer player={player} />
                        </div>
                    </GridCell>
                ))}
            </Grid>
        </div>
    )
}

export default RaidRoster