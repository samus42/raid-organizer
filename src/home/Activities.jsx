import React, { useState } from 'react'
import { Grid } from '@mui/material'
import ActiveList from './ActiveList'
import DisplayRotation from '../rotations/DisplayRotation'
import ChooseActivity from './ChooseActivity'
import { HelpfulToolsContainer } from '../tools/HelpfulToolsContainer'

const Activities = () => {
    const [showChooseActivity, setShowChooseActivity] = useState(false)

    if (showChooseActivity) {
        return (
            <div className="main-tab-content">
                <ChooseActivity onClose={() => setShowChooseActivity(false)} />
            </div>
        )
    }
    return (
        <div className="main-tab-content">
            <Grid container spacing={10}>
                <Grid item md={6}>
                    <ActiveList onChooseActivity={() => setShowChooseActivity(true)} />
                </Grid>
                <Grid item md={6}>
                    <DisplayRotation />
                </Grid>
                <Grid item md={12}>
                    <HelpfulToolsContainer />
                </Grid>
            </Grid>
        </div >
    )
}

export default Activities