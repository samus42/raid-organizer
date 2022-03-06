import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './home/Home'
import RaidMain from './raid/RaidMain.jsx'
import ApplicationBar from './ApplicationBar'
import ProcessLogin from './user/ProcessLogin'
import Profile from './user/Profile'
import ActivityMain from './activities/ActivityMain'
import CalendarInstructions from './home/CalendarInstructions'
import DiscipleSymbols from './tools/DiscipleSymbols';
const Main = (props) => {
    return (
        <Router>
            <ApplicationBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/help/calendar" element={<CalendarInstructions />} />
                <Route exact path="/raid/:raidKey" element={<RaidMain />} />
                <Route exact path="/activity/:activityKey" element={<ActivityMain />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/process-login" element={<ProcessLogin />} />
                <Route exact path="/tools/disciple" element={<DiscipleSymbols />} />
            </Routes>
        </Router>
    )
}

export default Main