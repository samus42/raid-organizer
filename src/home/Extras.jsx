import React from 'react'
import { Grid, GridCell } from '@rmwc/grid'
import { Typography } from '@rmwc/typography'

const Extras = () => {
    return (
        <div className="main-tab-content">
            <div><Typography use="headline6">Our clan members have their own things to share with the community.</Typography></div>
            <div><Typography use="headline6">Check out their web pages / creations!</Typography> </div>
            <Grid>
                <GridCell span="6">
                    <Typography use="headline4">Ace Malicious</Typography>
                    <ul className="extras-list">
                        <li>
                            <a href="https://www.acemalicious.com/">Visit Ace's Home page</a> to learn more about the player and see some writings about the character.
                        </li>
                        <li>
                            Read Ace's new novel <a href="https://archiveofourown.org/works/25198228/chapters/61071031?fbclid=IwAR2N2-V9T9KmaMqB3yFQYu2BnsbkbLtyc08UuGSt_u8eGtoxVfJ6WtYb9JM">Dôl Arnách</a>!
                        </li>
                        <li>
                            Coming soon, Book 2 in the series, Halily's War!
                        </li>
                    </ul>
                </GridCell>
                <GridCell>
                    <Typography use="headline4">Samus Darkthorn</Typography>
                    <ul className="extras-list">
                        <li><a href="/guides/shattered-throne/">Shattered Throne Solo Guide</a></li>
                        <li><a href="/guides/taken-king">Taken King Raid Guide</a></li>
                        <li>Coming soon, part 1 of his new novel (name TBD)</li>
                    </ul>
                </GridCell>
            </Grid>
        </div>
    )
}

export default Extras