import React, { useState } from 'react'
import ClanRoster from './ClanRoster'
import RaidRoster from './RaidRoster'

const RaidDetails = () => {
    const [currentRoster, setCurrentRoster] = useState([])

    const onAddPlayer = (player) => {
        setCurrentRoster(currentRoster.concat(player))
    }
    return (
        <div>
            <ClanRoster excludeList={currentRoster} onSelect={onAddPlayer} disabled={currentRoster.length > 5} />
            < div style={{ marginLeft: '260px', paddingTop: '0px' }}>
                <RaidRoster roster={currentRoster} onRosterChange={setCurrentRoster} />
            </div >
        </div >)
}

export default RaidDetails