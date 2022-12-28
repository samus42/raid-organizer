import React, { useEffect, useState } from 'react'
import { getClanRoster } from '../api/destiny'
import { List, ListItemIcon, ListItemText, ListItemButton } from '@mui/material'
import differenceBy from 'lodash.differenceby'
import { maxWidth } from '@mui/system'

const ClanRoster = ({ excludeList = [], onSelect = () => { }, disabled = false }) => {
    const [roster, setRoster] = useState([])
    const [loadError, setLoadError] = useState(null)

    useEffect(() => {
        const getRoster = async () => {
            try {
                const results = await getClanRoster()
                setRoster(differenceBy(results, excludeList, 'destinyId'))
            } catch (err) {
                console.error('Error loading clan roster: ', err)
                setLoadError(`Destiny API is currently having issues, so we cannot display the clan roster. It's not my fault!`)
            }
        }
        getRoster()
    }, [excludeList])

    if (loadError) {
        return (<div style={{ paddingTop: '20px', paddingLeft: '10px', maxWidth: '200px', color: 'red' }}><strong>{loadError}</strong></div>)
    }
    if (roster.length < 1) {
        return (<div style={{ paddingTop: '20px', paddingLeft: '10px' }}><strong>Loading...</strong></div>)
    }
    return (
        <div style={{ position: 'fixed', width: '250px', top: '65px', bottom: '0', overflowY: 'scroll', borderRight: '1px solid lightgray' }}>
            <h4 style={{ paddingLeft: '10px' }}>Clan Roster</h4>
            <List>
                {roster.map((player) => (
                    <ListItemButton disabled={disabled} key={player.name} onClick={() => !disabled && onSelect(player)}>
                        <ListItemIcon>
                            <img src={player.iconPath} alt="" width="24" height="24" />
                        </ListItemIcon>
                        <ListItemText primary={player.name} />
                    </ListItemButton>
                ))}
            </List>
        </div>
    )
}

export default ClanRoster