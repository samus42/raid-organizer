import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home'
import RaidDetails from './raid/RaidDetails.jsx'

const Main = (props) => {
    console.log('env: ', process.env.REACT_APP_ENV)
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/raid/:raidName" component={RaidDetails} />
            </Switch>
        </Router>
    )
}

export default Main