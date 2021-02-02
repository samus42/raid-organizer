import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home'
import RaidDetails from './raid/RaidDetails.jsx'
import ApplicationBar from './ApplicationBar'
import ProcessLogin from './user/ProcessLogin'
import Profile from './user/Profile'
import Members from './Members'

const Main = (props) => {
    console.log('env: ', process.env.REACT_APP_ENV)
    return (
        <Router>
            <ApplicationBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/raid/:raidKey" component={RaidDetails} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/members" component={Members} />
                <Route exact path="/process-login" component={ProcessLogin} />
            </Switch>
        </Router>
    )
}

export default Main