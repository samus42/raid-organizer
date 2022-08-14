import React from 'react'
import { Grid, Typography } from '@mui/material'
import Books from './Books'

const Extras = () => {
    return (
        <div className="main-tab-content">
            <Grid container spacing={10} >
                <Grid item md={6}>
                    <Books />
                </Grid>
                <Grid item md={6}>
                    <Typography variant="h4">Other Publications</Typography>
                    <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                        <Typography variant="h6"><a href="https://www.acemalicious.com/">Visit Ace's Home page</a> to learn more about the player and see some writings about the character.</Typography>
                    </div>
                    <div>
                        <Typography variant="h6">Other writings and guides by Samus that you might be interested in...</Typography>
                        <ul className="extras-list">
                            <li><a href="/guides/shattered-throne/">Shattered Throne Solo Guide</a></li>
                            <li><a href="/guides/taken-king">Taken King Raid Guide</a></li>
                            <li>A special <a href="https://docs.google.com/document/d/1uqDBXnZr-ZUKNLKE7t-30NyN_ze6pOI2nP__xpYXs04/edit?usp=sharing">holiday story</a> for all my clanmates!</li>
                        </ul>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Extras