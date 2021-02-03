import React, { useState } from 'react'
import { Typography } from '@rmwc/typography'
import { TabBar, Tab } from '@rmwc/tabs'
import Members from './Members'
import Activities from './Activities'
import packageJSON from '../package.json'

const tabs = {
    acitivities: 0,
    members: 1,
    about: 2,
}

const Main = (props) => {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <div>
            <TabBar activeTabIndex={activeTab} onActivate={evt => setActiveTab(evt.detail.index)}>
                <Tab>Activities</Tab>
                <Tab>Members</Tab>
                <Tab>About</Tab>
            </TabBar>
            {
                activeTab === tabs.acitivities && (
                    <Activities />
                )
            }
            {
                activeTab === tabs.members && <Members />
            }
            {
                activeTab === tabs.about && (
                    <div className="main-tab-content">
                        <Typography use="headline4">Welcome to the Shenaniganizers!</Typography>
                        <div><Typography use="headline6">The glitchiest clan ever. <small>(this website is bug free though)</small></Typography></div>
                        <div>
                            Right now this simply has a raid randomizer + some other items as ideas of what this page can do. Some ideas to add in the future:
                            <ul>
                                <li>Scheduling of Among Us</li>
                                <li>Allow signup of associates for non-clan members to join in the Among Us schedule</li>
                                <li>Automatically communicating via calendar link</li>
                                <li>Allow scheduling of a dungeon.</li>
                                <li>Saving of preferences (i.e. I HATE being scanner) which the algorithm will take into account.</li>
                                <li>Make this more mobile friendly, at least for viewing the raid assignments.</li>
                            </ul>
                            <div>BTW if you get lost, just hit the title in the upper left to come back here.</div>
                            <div style={{ paddingTop: '10px' }}>The source code is hosted at <a href="https://github.com/samus42/raid-organizer">https://github.com/samus42/raid-organizer</a> if you feel like contributing code.  Or you can use the Issues tab so suggest ideas!</div>
                        </div>
                    </div>
                )
            }
            <div style={{ textAlign: 'center', position: 'fixed', bottom: '0', width: '100%', color: 'gray' }}>
                <small>Version {packageJSON.version}</small>
            </div>
        </div>
    )
}

export default Main