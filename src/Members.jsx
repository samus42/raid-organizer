import React from 'react'
import { Button } from '@rmwc/button'
import { Grid, GridCell } from '@rmwc/grid'
import { useHistory } from "react-router-dom"
import { Typography } from '@rmwc/typography'
import ActiveRaidList from './raid/ActiveRaidList'

const Ace = () => (
    <div className="member-card">
        <div>
            <img alt="icon" src="https://www.bungie.net//img/profile/avatars/avatar23.jpg" />
        </div>
        <Typography use="headline4">Ace Malicious</Typography>
        <div className="member-detail">
            <a href="https://www.acemalicious.com/">Visit Ace's Home page</a> to learn more about the player and see some writings about the character.
        </div>
        <div className="member-detail">
            Read Ace's new novel <a href="https://archiveofourown.org/works/25198228/chapters/61071031?fbclid=IwAR2N2-V9T9KmaMqB3yFQYu2BnsbkbLtyc08UuGSt_u8eGtoxVfJ6WtYb9JM">Dôl Arnách</a>!
        </div>
    </div>
)

const Samus = () => (
    <div className="member-card">
        <div>
            <img alt="icon" src="https://www.bungie.net/img/profile/avatars/e2015_14.jpg" />
        </div>
        <Typography use="headline4">Samus Darkthorn</Typography>
        <div className="member-detail">
            Samus has written some guides to help his fellow Guardians. They try to be entertaining as well as helpful.
        </div>
        <div className="member-detail">
            <a href="https://www.faier.net/scott/shattered-throne/">Shattered Throne Solo Guide</a>
        </div>
        <div className="member-detail">
            <a href="https://www.faier.net/scott/tkk/">Taken King Raid Guide</a>
        </div>
    </div>
)

const Members = () => {
    const history = useHistory()
    return (
        <div style={{ paddingLeft: '20px', paddingTop: '20px' }}>
            <div><Typography use="headline6">Our clan members have their own things to share with the community. Check out their web pages / creations!</Typography> </div>
            <Grid>
                <GridCell><Ace /></GridCell>
                <GridCell><Samus /></GridCell>
            </Grid>
        </div>
    )
}

export default Members