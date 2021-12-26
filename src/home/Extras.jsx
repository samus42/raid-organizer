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
                            Book 1: <a href="https://drive.google.com/file/d/1aRAdXjs53rym6sK1TX0QnqLbMOhccBOK/view?usp=sharing">Into the Lair of Dôl Arnách</a>!
                        </li>
                        <li>
                            Book 2 just released: <a href="https://drive.google.com/file/d/1KHoI2UM9XrucOfadcGYgQA-VmRZaIJam/view?usp=sharing">Halily's War</a>
                        </li>
                    </ul>
                </GridCell>
                <GridCell>
                    <Typography use="headline4">Samus Darkthorn</Typography>

                    <ul className="extras-list">
                        <li>
                            His first book! <strong>A Thorn In Twilight</strong>. You can read this in multiple formats:
                            <ul className="extras-list">
                                <li><a href="https://drive.google.com/file/d/1IYXWvPoNCadS-PTuYfHjHayNVFKwSP8Y/view?usp=sharing">PDF</a></li>
                                <li><a href="https://drive.google.com/file/d/1oZanJFX7YdoNPi6YMufbKU4gpbNs5yqd/view?usp=sharing">MOBI (for Kindle)</a></li>
                                <li><a href="https://drive.google.com/file/d/1BjwOC80JfBmZVaoKJtgPpn8m5J1OeUOD/view?usp=sharing">ePUB (for all other eReaders)</a></li>
                                <li>In print! Just reach out to him and he'll send you a copy when he orders a batch.</li>
                            </ul>
                        </li>
                        <li><a href="/guides/shattered-throne/">Shattered Throne Solo Guide</a></li>
                        <li><a href="/guides/taken-king">Taken King Raid Guide</a></li>
                        <li>A special <a href="https://docs.google.com/document/d/1uqDBXnZr-ZUKNLKE7t-30NyN_ze6pOI2nP__xpYXs04/edit?usp=sharing">holiday story</a> for all my clanmates!</li>
                    </ul>
                </GridCell>
            </Grid>
        </div>
    )
}

export default Extras