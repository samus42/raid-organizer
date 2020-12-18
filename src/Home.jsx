import React from 'react'
import { Button } from '@rmwc/button'
import { useHistory } from "react-router-dom";
import { Grid, GridCell } from '@rmwc/grid'
import { Typography } from '@rmwc/typography'
import ActiveRaidList from './raid/ActiveRaidList'

const Main = (props) => {
    const history = useHistory()
    return (
        <div style={{ paddingLeft: '20px' }}>

            <Grid>
                <GridCell span={6}>
                    <Typography use="headline4">Welcome to the first iteration of a new site to serve our clan!</Typography>
                    <div>
                        Right now this simply has a raid randomizer + some other items as ideas of what this page can do. Some ideas to add in the future:
                        <ul>
                            <li>Drag and drop of players into slots, and allowing the switching of slots.</li>
                            <li>Persistent links for Raid assignments so we can just share that around.</li>
                            <li>Automatically communicating link with Clan chat.</li>
                            <li>Allow scheduling a raid and have people sign up for slots.</li>
                            <li>Allow scheduling of a dungeon.</li>
                            <li>Saving of preferences (i.e. I HATE being scanner) which the algorithm will take into account.</li>
                            <li>Tracking metrics (i.e. When someone complains they are always the scanner, now they can prove it).</li>
                            <li>Make this more mobile friendly, at least for viewing the raid assignments.</li>
                        </ul>
                        <div>BTW if you get lost, just hit the title in the upper left to come back here.</div>
                        <div style={{ paddingTop: '10px' }}>The source code is hosted at <a href="https://github.com/samus42/raid-organizer">https://github.com/samus42/raid-organizer</a> if you feel like contributing code.  Or you can use the Issues tab so suggest ideas!</div>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <Typography use="headline4">View your Clanmates creations!</Typography>
                        <div style={{ paddingBottom: '10px' }}>
                            From Ace is the gripping action adventure <a href="https://archiveofourown.org/works/25198228/chapters/61071031?fbclid=IwAR2N2-V9T9KmaMqB3yFQYu2BnsbkbLtyc08UuGSt_u8eGtoxVfJ6WtYb9JM">Dôl Arnách</a>! You'll laugh! You'll grip your reader tightly due to the suspense! So we recommend you download an e-book format so you don't break your phone or laptop screen.
                        <div style={{ paddingLeft: '20px' }}>
                                <div>
                                    <Typography use="caption">"Titans smash a lot, 'nuff said" - KaiJae</Typography>
                                </div>
                                <div>
                                    <Typography use="caption">"It's awesome! if you don't like it, you're a @#$@ing @#$@@#er" - Halily</Typography>
                                </div>
                                <div>
                                    <Typography use="caption">"I read it in the hospital recovering from someone running into me with a sparrow, it's great! The author is a @#$@# though." - W6MIR</Typography>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div>
                            Interested in running the Shattered Throne solo? Just interested in a humorous read by someone who suffered through it? In both cases, you're in luck! Read the <a href="https://www.faier.net/scott/shattered-throne/">Shattered Throne Solo Guide</a> by SamusDarkthorn today!
                        <div style={{ paddingLeft: '20px' }}>
                                <div>
                                    <Typography use="caption">"Owwwwwwwwww" - SamusDarkthorn</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </GridCell>
                <GridCell span={6}>
                    <div><Typography use="headline4">Organize a Raid For:</Typography></div>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}><Button raised onClick={() => history.push('/raid/garden')}>Garden Of Salvation</Button></div>
                    <div><Button raised onClick={() => history.push('/raid/crypt')}>Deep Stone Crypt</Button></div>
                    <div style={{ paddingTop: '20px' }}>
                        <ActiveRaidList />
                    </div>
                </GridCell>
            </Grid>
        </div>
    )
}

export default Main