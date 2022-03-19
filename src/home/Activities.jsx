import React, { useState } from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { useNavigate } from "react-router-dom"
import ActiveList from './ActiveList'
import DisplayRotation from '../rotations/DisplayRotation'
import ChooseActivity from './ChooseActivity'

const Activities = () => {
    const navigate = useNavigate()
    const [showChooseActivity, setShowChooseActivity] = useState(false)

    if (showChooseActivity) {
        return (
            <div className="main-tab-content">
                <ChooseActivity onClose={() => setShowChooseActivity(false)} />
            </div>
        )
    }
    return (<div className="main-tab-content">
        <Grid container spacing={10}>
            <Grid item md={6}>
                <div>
                    Subscribe to the events calendar! <a href="/help/calendar" target="_blank">Click here for help.</a>
                </div>
                <div style={{ paddingTop: '20px' }}>
                    <ActiveList />
                </div>

                <div style={{ marginTop: '20px' }}>
                    <DisplayRotation />
                </div>
                <div style={{ marginTop: '40px' }}>
                    <div><Typography variant="h4">Helpful Tools</Typography></div>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button variant="contained" onClick={() => navigate('/tools/disciple')}>Disciple Symbols</Button>
                    </div>
                </div>
            </Grid>
            <Grid item md={6}>
                <div><Typography variant="h4">Organize an Activity</Typography></div>
                <div style={{ paddingLeft: '20px' }}>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button style={{ minWidth: '250px' }} variant="contained" onClick={() => setShowChooseActivity(true)}>Choose Activity</Button>
                    </div>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button style={{ minWidth: '250px' }} variant="contained" onClick={() => navigate('/raid/vault')}>Vault Of Glass</Button>
                    </div>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button style={{ minWidth: '250px' }} variant="contained" onClick={() => navigate('/raid/crypt')}>Deep Stone Crypt</Button>
                    </div>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button style={{ minWidth: '250px' }} variant="contained" onClick={() => navigate('/raid/garden')}>Garden Of Salvation</Button>
                    </div>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button style={{ minWidth: '250px' }} variant="contained" onClick={() => navigate('/raid/wish')}>Last Wish</Button>
                    </div>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button style={{ minWidth: '250px' }} variant="contained" onClick={() => navigate('/raid/wrath')}>Wrath Of the Machine</Button>
                    </div>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button style={{ minWidth: '250px' }} variant="contained" onClick={() => navigate('/raid/ttk')}>Taken King</Button>
                    </div>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button style={{ minWidth: '250px' }} variant="contained" onClick={() => navigate('/raid/crota')}>Crota's End</Button>
                    </div>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button style={{ minWidth: '250px' }} variant="contained" onClick={() => navigate('/activity/amongus')}>Among Us</Button>
                    </div>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button style={{ minWidth: '250px' }} variant="contained" onClick={() => navigate('/activity/custom')}>Custom Activity</Button>
                    </div>
                </div>
            </Grid>
        </Grid>
    </div>
    )
}

export default Activities