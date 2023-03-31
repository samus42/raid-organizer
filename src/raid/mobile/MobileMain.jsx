import React, { useState, useEffect } from 'react'
import { Tabs, Tab, Typography } from '@mui/material'
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

    const onStrategyChange = (stage, strategy) => {
        console.log('rs: ', stage)
        console.log('rt: ', strategy)
        const clone = (obj) => JSON.parse(JSON.stringify(obj))
        const newRaid = clone(raid)
        const changeStage = newRaid.stages.find((s) => s.title === stage.title)
        changeStage.strategy = strategy
        changeStage.roles = strategy.roles
        onChangeRaid(newRaid)
    }
    return (
        <div>
            <Tabs indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                value={activeTab}
                onChange={(evt, newValue) => setActiveTab(newValue)}>
                <Tab label="Details" />
                <Tab label="Roster" />
                <Tab label="Stages" />
            </Tabs>
            <div style={{ padding: '5px', paddingTop: '20px', textAlign: 'center' }}><Typography variant="h4">{raid.raidName}</Typography></div>
            <div style={{ padding: '5px' }}>
                {activeTab === tabs.details && <MobileDetails date={date} instanceName={instanceName} saveEnabled={saveEnabled} onChange={onDetailsChange} onSave={onSave} />}
                {activeTab === tabs.roster && <MobileRoster roster={roster} saveEnabled={saveEnabled} onRosterChange={onUpdateRoster} />}
                {activeTab === tabs.stages &&
                    (<MobileStages
                        raid={raid}
                        saveEnabled={saveEnabled}
                        onChange={(newRaid) => onChangeRaid(newRaid, true)}
                        onRandomizeRoles={onRandomizeRoles}
                        onStrategyChange={onStrategyChange}
                    />
                    )}
            </div>
        </div >
    )
}

export default MobileMain