import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import differenceBy from 'lodash.differenceby'
import isEmpty from 'lodash.isempty'
import { getClanRoster } from '../../api/destiny'
import { TextField, Button, List, ListItem, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/PersonRemove'
import { v4 as uuid } from 'uuid'

const normalizeId = (destinyPlayer) => {
    return { name: destinyPlayer.name, id: destinyPlayer.destinyId, type: 'destiny' }
}
const DesktopRoster = ({ roster = [], excludeList, onRosterChange, activity, maxPlayers }) => {
    const [destinyRoster, setDestinyRoster] = useState([])
    const [filteredRoster, setFilteredRoster] = useState([])
    const [manualPlayerName, setManualPlayerName] = useState('')
    useEffect(() => {
        const loadDestinyRoster = async () => {
            const results = await getClanRoster()
            const normalized = results.map(normalizeId)
            setDestinyRoster(normalized)
            setFilteredRoster(differenceBy(results.map(normalizeId), roster, 'id'))
        }
        loadDestinyRoster()
    }, [excludeList])

    useEffect(() => {
        setFilteredRoster(differenceBy(destinyRoster, roster, 'id'))
    }, [roster])

    const onSelectDestinyPlayer = (player) => {
        onRosterChange(roster.concat(player))
        setManualPlayerName('')
    }

    const onManualPlayerChange = (evt) => {
        setManualPlayerName(evt.target.value)
    }

    const onAddPlayer = () => {
        if (!isEmpty(manualPlayerName)) {
            onRosterChange(roster.concat({ id: uuid(), type: 'manual', name: manualPlayerName }))
        }
    }

    const onRemovePlayer = (player) => {
        onRosterChange(roster.filter(({ id }) => id !== player.id))
    }
    const atLimit = () => maxPlayers - roster.length <= 0

    return (
        <div style={{ maxWidth: '500px' }}>
            <div>
                <Select isDisabled={atLimit()} placeholder="Select Destiny Player" value={null} getOptionLabel={(o) => o.name} getOptionValue={(o) => o} options={filteredRoster} onChange={onSelectDestinyPlayer} />
            </div>
            <div style={{ padding: '20px' }}>
                <strong>OR</strong>
            </div>
            <div>
                <TextField disabled={atLimit()} fullWidth label="Enter player name" value={manualPlayerName} onChange={onManualPlayerChange} />

            </div>
            <div style={{ paddingTop: '10px' }}>
                <Button disabled={isEmpty(manualPlayerName) || atLimit()} onClick={onAddPlayer}>Add Player</Button>
            </div>
            <div style={{ paddingTop: '10px' }}>
                <div style={{ paddingLeft: '10px' }}>
                    <strong>{`${Math.max(0, maxPlayers - roster.length)} slots available`}</strong>
                </div>
                <List>
                    {roster.map((player) => (
                        <ListItem span={4} key={player.name}
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete" onClick={() => onRemovePlayer(player)}>
                                    <DeleteIcon />
                                </IconButton>
                            }>
                            <span>{player.name}</span>
                            {/* <ListItemMeta icon="clear" onClick={() => onRemovePlayer(player)} /> */}
                        </ListItem>
                    ))}
                </List>

            </div>
        </div >
    )
}

export default DesktopRoster