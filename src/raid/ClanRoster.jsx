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

    if (roster.length < 1) {
        return (<div style={{ paddingTop: '20px', paddingLeft: '10px' }}><strong>Loading...</strong></div>)
    }
    return (
        <div style={{ position: 'fixed', width: '250px', top: '65px', bottom: '0', overflowY: 'scroll', borderRight: '1px solid lightgray' }}>
            <h4 style={{ paddingLeft: '10px' }}>Clan Roster</h4>
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