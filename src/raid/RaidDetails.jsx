import React, { useEffect, useState } from 'react'
import ClanRoster from './ClanRoster'
import RaidRoster from './RaidRoster'
import { Button } from '@rmwc/button'
import { newRaidByKey, isRaidKey } from './templates'
import randomizeRaidAssignments from './randomizeRaidAssignments'
import RaidAssignments from './RaidAssignments'


const RaidDetails = ({ match }) => {
    console.log('match: ', match)
    const [currentRoster, setCurrentRoster] = useState([])
    const [raid, setRaid] = useState()
    const [displayRoles, setDisplayRoles] = useState(false)

    useEffect(() => {
        if (isRaidKey([match.params.raidKey])) {
            setRaid(newRaidByKey(match.params.raidKey))
        } else {
            console.log('TOOD: Load raid')
        }
    }, [match])

    const onAddPlayer = (player) => {
        setCurrentRoster(currentRoster.concat(player))
    }

    const determineRoles = () => {
        setRaid(randomizeRaidAssignments({ raid, roster: currentRoster }))
        setDisplayRoles(true)
    }
    if (!raid) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <ClanRoster excludeList={currentRoster} onSelect={onAddPlayer} disabled={currentRoster.length > 5} />
            < div style={{ marginLeft: '260px', paddingTop: '0px' }}>
                <RaidRoster roster={currentRoster} onRosterChange={setCurrentRoster} raidTitle={raid.raidName} />
                <div>
                    <Button raised disabled={currentRoster.length < 6} onClick={determineRoles}>Randomize Roles</Button>
                </div>
                {
                    displayRoles && (<RaidAssignments raid={raid} />)
                }
            </div>

        </div >)
}

export default RaidDetails