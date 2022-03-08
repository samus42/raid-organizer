import { useState } from 'react'
import { Tabs, Tab } from "@mui/material"
import packageJSON from '../../package.json'
import AboutUs from "./AboutUs"
import Extras from '../home/Extras'
import Tools from './Tools'

const tabs = {
    about: 0,
    publications: 1,
    tools: 2,
}

const ExternalHome = () => {
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
                <Tab label="About Us" />
                <Tab label="Publications" />
                <Tab label="Tools" />
            </Tabs>
            {
                activeTab === tabs.about && (
                    <AboutUs />
                )
            }
            {
                activeTab === tabs.publications && <Extras />
            }
            {
                activeTab === tabs.tools && <Tools />
            }
            <div style={{ textAlign: 'center', position: 'fixed', bottom: '0', width: '100%', color: 'gray' }}>
                <small>Version {packageJSON.version}</small>
            </div>
        </div>
    )

}

export default ExternalHome