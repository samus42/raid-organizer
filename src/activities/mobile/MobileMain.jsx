import React, { useEffect, useState } from 'react'
import DateTimePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { Button } from '@rmwc/button'
import { Typography } from '@rmwc/typography'
import { TextField } from '@rmwc/textfield'
import DesktopRoster from '../desktop/DesktopRoster'
import MobileDetails from '../../raid/mobile/MobileDetails'
import { TabBar, Tab } from '@rmwc/tabs'

const tabs = {
    details: 0,
    roster: 1,
}

const MobileMain = ({ roster, date, instanceName, activity, saveEnabled, onSave, onArchive, onDetailsChange, onRosterChange }) => {
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
            <div style={{ padding: '5px', paddingTop: '20px', textAlign: 'center' }}><Typography use="headline4">Among Us</Typography></div>
            <div style={{ padding: '5px' }}>
                {activeTab === tabs.details && <MobileDetails date={date} instanceName={instanceName} saveEnabled={saveEnabled} onChange={onDetailsChange} onSave={onSave} />}
                {activeTab === tabs.roster && <DesktopRoster activity={activity} roster={roster} saveEnabled={saveEnabled} onRosterChange={onUpdateRoster} />}
            </div>
        </div >
    )
}

export default MobileMain