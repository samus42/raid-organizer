import React from 'react'
import { Grid, Typography } from '@mui/material'

const Extras = () => {
    return (
        <div className="main-tab-content">
            <div><Typography variant="h6">Our clan members have their own things to share with the community.</Typography></div>
            <div style={{ paddingBottom: '20px' }}><Typography variant="h6">Check out their web pages / creations!</Typography> </div>
            <Grid container spacing={10} >
                <Grid item md={6}>
                    <div>
                        <Typography variant="h4">Ace Malicious</Typography>
                        <ul className="extras-list">
                            <li>
                                <a href="https://www.acemalicious.com/">Visit Ace's Home page</a> to learn more about the player and see some writings about the character.
                            </li>
                            <li>
                                Book 1: <strong>Into the Lair of Dôl Arnách</strong>
                                <ul className="extras-list">
                                    <li><a href="https://drive.google.com/file/d/1aRAdXjs53rym6sK1TX0QnqLbMOhccBOK/view?usp=sharing">PDF</a></li>
                                    <li><a href="https://drive.google.com/file/d/14oVvqN4yXzc7XzbztzsJbWumwChvAiIU/view?usp=sharing">ePub (for all eReaders, including Kindle)</a></li>
                                </ul>
                            </li>
                            <li>
                                Book 2: <strong>Halily's War</strong>
                                <ul className="extras-list">
                                    <li><a href="https://drive.google.com/file/d/1KHoI2UM9XrucOfadcGYgQA-VmRZaIJam/view?usp=sharing">PDF</a></li>
                                    <li><a href="https://drive.google.com/file/d/1NxuxoskUfQyGNrOMauO13GNuH_LaUmnU/view?usp=sharing">ePub (for all eReaders, including Kindle)</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </Grid>
                <Grid item md={6}>
                    <div>
                        <Typography variant="h4">Samus Darkthorn</Typography>

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
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Extras