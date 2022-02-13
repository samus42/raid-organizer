import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { useHistory } from "react-router-dom"
import ActiveList from './ActiveList'

const Activities = () => {
    const history = useHistory()
    return (<div className="main-tab-content">
        <Grid container spacing={3}>
            <Grid item xs={5}>
                <div>
                    <div>
                        Subscribe to the events calendar! <a href="/help/calendar" target="_blank">Click here for help.</a>
                        <div>
                            <a href="webcal://us-central1-shenaniganizers-e51d9.cloudfunctions.net/api/rest/calendar">webcal://us-central1-shenaniganizers-e51d9.cloudfunctions.net/api/rest/calendar</a></div>
                    </div>
                </div>
                <div style={{ paddingTop: '20px' }}>
                    <ActiveList />
                </div>
            </Grid>
            <Grid item span={5}>
                <div><Typography variant="h4">Organize an Activity:</Typography></div>
                <div style={{ paddingLeft: '20px' }}>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button style={{ minWidth: '250px' }} variant="contained" onClick={() => history.push('/raid/vault')}>Vault Of Glass</Button>
                    </div>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button style={{ minWidth: '250px' }} variant="contained" onClick={() => history.push('/raid/crypt')}>Deep Stone Crypt</Button>
                    </div>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button style={{ minWidth: '250px' }} variant="contained" onClick={() => history.push('/raid/garden')}>Garden Of Salvation</Button>
                    </div>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button style={{ minWidth: '250px' }} variant="contained" onClick={() => history.push('/raid/wish')}>Last Wish</Button>
                    </div>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button style={{ minWidth: '250px' }} variant="contained" onClick={() => history.push('/raid/wrath')}>Wrath Of the Machine</Button>
                    </div>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button style={{ minWidth: '250px' }} variant="contained" onClick={() => history.push('/raid/ttk')}>Taken King</Button>
                    </div>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button style={{ minWidth: '250px' }} variant="contained" onClick={() => history.push('/raid/crota')}>Crota's End</Button>
                    </div>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button style={{ minWidth: '250px' }} variant="contained" onClick={() => history.push('/activity/amongus')}>Among Us</Button>
                    </div>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button style={{ minWidth: '250px' }} variant="contained" onClick={() => history.push('/activity/custom')}>Custom Activity</Button>
                    </div>
                </div>
            </Grid>

        </Grid>
    </div>
    )
}

export default Activities