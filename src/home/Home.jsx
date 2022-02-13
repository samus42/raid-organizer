import React, { useState } from 'react'
import {
    Tabs,
    Tab
} from '@mui/material'
import Members from './Members'
import Activities from './Activities'
import packageJSON from '../../package.json'
import Extras from './Extras'

const tabs = {
    acitivities: 0,
    members: 1,
    extras: 2,
}

const Main = (props) => {
    const [activeTab, setActiveTab] = useState(0)
    const handleTabChange = (evt, newValue) => setActiveTab(newValue)
    return (
        <div>
            <Tabs indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                value={activeTab}
                onChange={handleTabChange}
            >
                <Tab label="Activities" />
                <Tab label="Members" />
                <Tab label="Extras" />
            </Tabs>
            {
                activeTab === tabs.acitivities && (
                    <Activities />
                )
            }
            {
                activeTab === tabs.members && <Members />
            }
            {
                activeTab === tabs.extras && <Extras />
            }
            <div style={{ textAlign: 'center', position: 'fixed', bottom: '0', width: '100%', color: 'gray' }}>
                <small>Version {packageJSON.version}</small>
            </div>
        </div>
    )
}

export default Main