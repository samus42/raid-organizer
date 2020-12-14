import React, { useEffect, useState } from 'react'
import { getClanRoster } from '../api/destiny'
import { List, ListItem, ListItemGraphic, ListItemText } from '@rmwc/list'
import differenceBy from 'lodash.differenceby'

const ClanRoster = ({ excludeList = [], onSelect = () => { }, disabled = false }) => {
    const [roster, setRoster] = useState([])

    useEffect(() => {
        const getRoster = async () => {
            const results = await getClanRoster()
            setRoster(differenceBy(results, excludeList, 'destinyId'))
        }
        console.log('Retrieving clan roster')
        getRoster()
    }, [excludeList])

    return (
        <div style={{ position: 'fixed', width: '250px', top: '65px', bottom: '0', overflowY: 'scroll' }}>
            <List>
                {roster.map((player) => (
                    <ListItem disabled={disabled} key={player.name} onClick={() => !disabled && onSelect(player)}>
                        <ListItemGraphic icon={<img src={player.iconPath} alt="" width="24" height="24" />} />
                        <ListItemText>{player.name}</ListItemText>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default ClanRoster