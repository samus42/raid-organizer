import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { TabBar, Tab } from '@rmwc/tabs'
import { Typography } from '@rmwc/typography'
import MobileDetails from './MobileDetails'
import MobileRoster from './MobileRoster'
import MobileStages from './MobileStages'
import { newRaidByKey, isRaidKey } from '../templates'
import { loadRaid, saveRaid } from '../../api/clan'
import isEmpty from 'lodash.isempty'
import omitDeep from 'omit-deep-lodash'

// 601a0b0d7de116071287f9b3
const tabs = {
    details: 0,
    roster: 1,
    stages: 2,
}
const MobileMain = ({ match }) => {
    const history = useHistory()
    const [activeTab, setActiveTab] = useState(tabs.details)
    const [raid, setRaid] = useState()
    const [instanceName, setInstanceName] = useState('')
    const [date, setDate] = useState(new Date())
    const [currentRoster, setCurrentRoster] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [saveEnabled, setSaveEnabled] = useState(false)

    useEffect(() => {
        const getRaid = async () => {
            const loaded = await loadRaid(match.params.raidKey)
            setRaid(loaded)
            setInstanceName(loaded.instanceName)
            setDate(new Date(loaded.date))
            setCurrentRoster(loaded.roster)
            setIsLoading(false)
            setSaveEnabled(true)
        }
        setIsLoading(true)
        console.log('raidKey: ', match.params.raidKey)
        if (isRaidKey([match.params.raidKey])) {
            setRaid(newRaidByKey(match.params.raidKey))
            setActiveTab(tabs.details)
            setIsLoading(false)
            setSaveEnabled(false)
        } else {
            setActiveTab(tabs.roster)
            getRaid()
        }
    }, [match])

    const onDetailsChange = (details) => {
        setInstanceName(details.instanceName.trim())
        setDate(details.date)
        setSaveEnabled(!isEmpty(details.instanceName.trim()) && details.date)
    }

    const onSave = async () => {
        const isNew = !raid.id
        const updated = await saveRaid({ ...raid, roster: currentRoster, instanceName, date })
        setRaid(updated)
        if (isNew) {
            history.push(`/raid/${updated.id}`)
            // setSaveMessage('Raid saved! You can now share the URL in the browser with others.')
        } else {
            // setSaveMessage('Raid updated!')
        }
    }

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    console.log(raid)
    return (
        <div>
            <TabBar activeTabIndex={activeTab} onActivate={evt => setActiveTab(evt.detail.index)}>
                <Tab>Details</Tab>
                <Tab>Roster</Tab>
                <Tab>Stages</Tab>
            </TabBar>
            <div style={{ padding: '5px', paddingTop: '20px' }}><Typography use="headline4">{raid.raidName}</Typography></div>
            <div style={{ padding: '5px' }}>
                {activeTab === tabs.details && <MobileDetails date={date} instanceName={instanceName} saveEnabled={saveEnabled} onChange={onDetailsChange} onSave={onSave} />}
                {activeTab === tabs.roster && <MobileRoster roster={currentRoster} saveEnabled={saveEnabled} onRosterChange={setCurrentRoster} />}
                {activeTab === tabs.stages && <MobileStages raid={raid} saveEnabled={saveEnabled} />}
            </div>
        </div>
    )
}

export default MobileMain