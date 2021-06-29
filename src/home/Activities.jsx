import React from 'react'
import { Button } from '@rmwc/button'
import { useHistory } from "react-router-dom"
import { Grid, GridCell } from '@rmwc/grid'
import { Typography } from '@rmwc/typography'
import ActiveList from './ActiveList'

const Activities = () => {
    const history = useHistory()
    return (<div className="main-tab-content">
        <Grid>
            <GridCell span={6}>
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
            </GridCell>
            <GridCell span={6}>
                <div><Typography use="headline4">Organize an Activity:</Typography></div>
                <div style={{ paddingLeft: '20px' }}>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button style={{ minWidth: '250px' }} raised onClick={() => history.push('/raid/vault')}>Vault Of Glass</Button>
                    </div>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button style={{ minWidth: '250px' }} raised onClick={() => history.push('/raid/crypt')}>Deep Stone Crypt</Button>
                    </div>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button style={{ minWidth: '250px' }} raised onClick={() => history.push('/raid/garden')}>Garden Of Salvation</Button>
                    </div>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button style={{ minWidth: '250px' }} raised onClick={() => history.push('/raid/wish')}>Last Wish</Button>
                    </div>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button style={{ minWidth: '250px' }} raised onClick={() => history.push('/raid/wrath')}>Wrath Of the Machine</Button>
                    </div>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button style={{ minWidth: '250px' }} raised onClick={() => history.push('/raid/ttk')}>Taken King</Button>
                    </div>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button style={{ minWidth: '250px' }} raised onClick={() => history.push('/raid/crota')}>Crota's End</Button>
                    </div>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button style={{ minWidth: '250px' }} raised onClick={() => history.push('/activity/amongus')}>Among Us</Button>
                    </div>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Button style={{ minWidth: '250px' }} raised onClick={() => history.push('/activity/custom')}>Custom Activity</Button>
                    </div>
                </div>
            </GridCell>
            <GridCell span={6}>
                <Typography use="headline4">Want a PS5?</Typography>
                <div>Getting a PS5 is hard, however we have some individuals who are eagerly locating when certain stock goes on sale. Nekro mentioned having a signup so if they could get more than one, they would and then provide it at cost to another clanmate.</div>
                <div style={{ marginTop: '10px', fontSize: 'larger' }}><a href="https://docs.google.com/spreadsheets/d/16N5gQ97mN3D34N9AtPIl5__aRyfqFZ7RntVR_mIUBJ4/edit?usp=sharing" target="_blank" rel="noreferrer">Go To PS5 Signup List</a></div>
            </GridCell>
        </Grid>
    </div>
    )
}

export default Activities