import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { useNavigate } from "react-router-dom"
import ActiveList from './ActiveList'

const Activities = () => {
    const navigate = useNavigate()
    return (<div className="main-tab-content">
        <Grid container spacing={8}>
            <Grid item>
                <div>
                    Subscribe to the events calendar! <a href="/help/calendar" target="_blank">Click here for help.</a>
                </div>
                <div style={{ paddingTop: '20px' }}>
                    <ActiveList />
                </div>
            </Grid>
            <Grid item>
                <div><Typography variant="h4">Organize an Activity:</Typography></div>
                <div style={{ paddingLeft: '20px' }}>
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