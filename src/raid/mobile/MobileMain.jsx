import React, { useState, useEffect } from 'react'
import { TabBar, Tab } from '@rmwc/tabs'
import { Typography } from '@rmwc/typography'
import MobileDetails from './MobileDetails'
import MobileRoster from './MobileRoster'
import MobileStages from './MobileStages'
import randomizeRaidAssignments from '../randomizeRaidAssignments'

const tabs = {
    details: 0,
    roster: 1,
    stages: 2,
}
const MobileMain = ({ roster, date, instanceName, raid, saveEnabled, onSave, onArchive, onChangeRaid, onDetailsChange, onRosterChange }) => {
    const [activeTab, setActiveTab] = useState(tabs.details)

    useEffect(() => {
        if (raid.id) {
            setActiveTab(tabs.roster)
        } else {
            setActiveTab(tabs.details)
        }
    }, [raid.id])
    const onUpdateRoster = async (newRoster) => {
        onRosterChange(newRoster, true)
    }

    const onRandomizeRoles = () => {
        onChangeRaid(randomizeRaidAssignments({ raid, roster }), true)
    }
    return (
        <div>
            <TabBar activeTabIndex={activeTab} onActivate={evt => setActiveTab(evt.detail.index)}>
                <Tab>Details</Tab>
                <Tab>Roster</Tab>
                <Tab>Stages</Tab>
            </TabBar>
            <div style={{ padding: '5px', paddingTop: '20px', textAlign: 'center' }}><Typography use="headline4">{raid.raidName}</Typography></div>
            <div style={{ padding: '5px' }}>
                {activeTab === tabs.details && <MobileDetails date={date} instanceName={instanceName} saveEnabled={saveEnabled} onChange={onDetailsChange} onSave={onSave} />}
                {activeTab === tabs.roster && <MobileRoster roster={roster} saveEnabled={saveEnabled} onRosterChange={onUpdateRoster} />}
                {activeTab === tabs.stages &&
                    (<MobileStages
                        raid={raid}
                        saveEnabled={saveEnabled}
                        onChange={(newRaid) => onChangeRaid(newRaid, true)}
                        onRandomizeRoles={onRandomizeRoles}
                    />
                    )}
            </div>
        </div >
    )
}

export default MobileMain