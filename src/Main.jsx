import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './home/Home'
import RaidMain from './raid/RaidMain.jsx'
import ApplicationBar from './ApplicationBar'
import ProcessLogin from './user/ProcessLogin'
import Profile from './user/Profile'
import ActivityMain from './activities/ActivityMain'
import CalendarInstructions from './home/CalendarInstructions'
import DiscipleSymbols from './tools/disciple/DiscipleSymbols'
import ExternalHome from './external/ExternalHome'
import DisciplePuzzle from './tools/disciple/DisciplePuzzle';
import TakenKingChestPuzzle from './tools/takenking/ChestPuzzle';
import { BlogMain } from './blog';

const Main = (props) => {
    return (
        <Router>
            <ApplicationBar />
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path=":tab" element={<Home />} />
                </Route>
                <Route exact path="/help/calendar" element={<CalendarInstructions />} />
                <Route exact path="/raid/:raidKey" element={<RaidMain />} />
                <Route exact path="/activity/:activityKey" element={<ActivityMain />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/process-login" element={<ProcessLogin />} />
                <Route path="/tools/disciple" element={<DiscipleSymbols />}>
                    <Route path=":filter" element={<DiscipleSymbols />} />
                </Route>
                <Route path="/tools/disciple-puzzle" element={<DisciplePuzzle />} />
                <Route path="/tools/tkk-puzzle" element={<TakenKingChestPuzzle />} />
                <Route path="/blog" element={<BlogMain />} />
                <Route exact path="/public/" element={<ExternalHome />} />
                <Route exact path="/public/tools/disciple" element={<DiscipleSymbols />}>
                    <Route path=":filter" element={<DiscipleSymbols />} />
                </Route>
                <Route path="/public/tools/disciple-puzzle" element={<DisciplePuzzle />} />
                <Route path="/public/tools/tkk-puzzle" element={<TakenKingChestPuzzle />} />
            </Routes>
        </Router>
    )
}

export default Main