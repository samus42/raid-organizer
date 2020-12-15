import React, { useState } from 'react'
import ClanRoster from './ClanRoster'
import RaidRoster from './RaidRoster'
import { Button } from '@rmwc/button'
import DeepStoneCrypt from './DeepStoneCrypt'
import randomizeRaidAssignments from './randomizeRaidAssignments'
import RaidAssignments from './RaidAssignments'

const RaidDetails = () => {
    const [currentRoster, setCurrentRoster] = useState([])
    const [raid, setRaid] = useState()

    const onAddPlayer = (player) => {
        setCurrentRoster(currentRoster.concat(player))
    }

    const determineRoles = () => {
        setRaid(randomizeRaidAssignments({ raid: DeepStoneCrypt, roster: currentRoster }))
    }
    return (
        <div>
            <ClanRoster excludeList={currentRoster} onSelect={onAddPlayer} disabled={currentRoster.length > 5} />
            < div style={{ marginLeft: '260px', paddingTop: '0px' }}>
                <RaidRoster roster={currentRoster} onRosterChange={setCurrentRoster} />
                <div>
                    <Button raised disabled={currentRoster.length < 6} onClick={determineRoles}>Determine Roles</Button>
                </div>
                {
                    raid && (<RaidAssignments raid={raid} />)
                }
            </div>

        </div >)
}

export default RaidDetails