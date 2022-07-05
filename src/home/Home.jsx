import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
    Tabs,
    Tab
} from '@mui/material'
import Members from './Members'
import Activities from './Activities'
import packageJSON from '../../package.json'
import Extras from './Extras'

const tabs = {
    activities: 0,
    members: 1,
    extras: 2,
}

const findTabByName = (name) => {
    const index = Object.keys(tabs).indexOf(name)
    return Math.max(0, index);
}

const Main = (props) => {
    const params = useParams()
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState(findTabByName(params.tab))
    const handleTabChange = (evt, newValue) => {
        setActiveTab(newValue)
        navigate(`/${Object.keys(tabs)[newValue]}`, { replace: true })
    }
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
                activeTab === tabs.activities && (
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