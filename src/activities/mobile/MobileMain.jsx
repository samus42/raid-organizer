import React, { useEffect, useState } from 'react'
import { Typography } from '@rmwc/typography'
import MobileRoster from '../desktop/DesktopRoster'
// import MobileRoster from './MobileRoster'
import MobileDetails from './MobileDetails'
import { TabBar, Tab } from '@rmwc/tabs'
import '@rmwc/select/styles';

const tabs = {
    details: 0,
    roster: 1,
}

const MobileMain = ({ roster, date, instanceName, maxPlayers, activity, saveEnabled, onSave, onArchive, onDetailsChange, onRosterChange }) => {
    const [activeTab, setActiveTab] = useState(tabs.details)

    useEffect(() => {
        if (activity.id) {
            setActiveTab(tabs.roster)
        } else {
            setActiveTab(tabs.details)
        }
    }, [activity.id])

    const onUpdateRoster = async (newRoster) => {
        onRosterChange(newRoster, true)
    }

    return (
        <div>
            <TabBar activeTabIndex={activeTab} onActivate={evt => setActiveTab(evt.detail.index)}>
                <Tab>Details</Tab>
                <Tab>Roster</Tab>
            </TabBar>
            <div style={{ padding: '5px', paddingTop: '20px', textAlign: 'center' }}><Typography use="headline4">{activity.activityName}</Typography></div>
            {!activity.active && <h2 style={{ padding: '5px' }}>This activity is longer active!</h2>}
            <div style={{ padding: '5px' }}>
                {activeTab === tabs.details && <MobileDetails activity={activity} date={date} instanceName={instanceName} maxPlayers={maxPlayers} saveEnabled={saveEnabled} onChange={onDetailsChange} onSave={onSave} onArchive={onArchive} />}
                {activeTab === tabs.roster && <MobileRoster activity={activity} roster={roster} maxPlayers={maxPlayers} saveEnabled={saveEnabled} onRosterChange={onUpdateRoster} />}
            </div>
        </div >
    )
}

export default MobileMain