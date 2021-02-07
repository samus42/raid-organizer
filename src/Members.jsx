import React from 'react'
import { Grid, GridCell } from '@rmwc/grid'
import { Typography } from '@rmwc/typography'

const W6MIR = () => (
    <div className="member-card">
        <div>
            <img alt="icon" src="https://www.bungie.net//img/profile/avatars/cc22.jpg" />
        </div>
        <Typography use="headline4">W6MIR</Typography>
        <div className="member-detail">
            <strong>Alert!</strong> Under Section 8, Paragraph 4 of the Clan Charter, W6MIR will not be obligated to be fireteam leader under any circumstance.
        </div>
        <div>
            <small>And no, he has no interest in playing Gambit with you.</small>
        </div>
    </div>
)
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


const Nutbar = () => (
    <div className="member-card">
        <div>
            <img alt="icon" src="https://www.bungie.net//img/profile/avatars/avatar2.jpg" />
        </div>
        <Typography use="headline4">Malkavian Nutbar</Typography>
        <div className="member-detail">
            <span style={{ fontStyle: 'italic' }}>"Empowered Left"</span>
        </div>
        <div className="member-detail">
            Has a secret superpower. He can cause his clan to complete any raid with just one sentence. <span style={{ fontStyle: 'italic' }}>"Guys, this is my last run."</span>
        </div>
        <div className="member-detail">
            <small>And his other character is ALSO a Warlock...</small>
        </div>
    </div>
)

const Silly = () => (
    <div className="member-card">
        <div>
            <img alt="icon" src="https://www.bungie.net/img/profile/avatars/odst_skull_fire.png" />
        </div>
        <Typography use="headline4">Silly Milly</Typography>
        <div className="member-detail">
            <div><strong>Q:</strong><span> What do you use when fighting Fallen?</span></div>
            <div><strong>A:</strong><span> A bow.</span></div>
            <div><strong>Q:</strong><span> What do you use when fighting an armored boss?</span></div>
            <div><strong>A:</strong><span> A bow.</span></div>
            <div><strong>Q:</strong><span> What do you use when fighting a bow proof boss?</span></div>
            <div><strong>A:</strong><span> A bow.</span></div>
        </div>
    </div>
)

const Halily = () => (
    <div className="member-card">
        <div>
            <img alt="icon" src="https://www.bungie.net//img/profile/avatars/cc24.jpg" />
        </div>
        <Typography use="headline4">Halily</Typography>
        <div className="member-detail">
            <span style={{ fontStyle: 'italic' }}>"God@#$@ @%#@ing @#@$% of a jumping puzzle."</span>
        </div>
        <div className="member-detail">
            This is a public site, you can't say things like that!
        </div>
        <div className="member-detail">
            <span style={{ fontStyle: 'italic' }}>"@#$# you, you @#$@ing @#$wipe mother @#$@er"</span>
        </div>
    </div>
)

const Momo = () => (
    <div className="member-card">
        <div>
            <img alt="icon" src="https://www.bungie.net//img/profile/avatars/cc25.jpg" />
        </div>
        <Typography use="headline4">Momo</Typography>
        <div className="member-detail">
            <span style={{ fontStyle: 'italic' }}>"Can you remind me which weapons I killed you with? I've lost track."</span>
        </div>
        <div className="member-detail">
            If he tells you something's going to be easy. <strong>RUN</strong>
        </div>
    </div>
)

const Mabie = () => (
    <div className="member-card">
        <div>
            <img alt="icon" src="https://www.bungie.net//img/profile/avatars/attention2.gif" />
        </div>
        <Typography use="headline4">Mabie</Typography>
        <div className="member-detail">
            <span style={{ fontStyle: 'italic' }}>"Hey, this orange glowing Shank followed me home, can we keep it?"</span>
        </div>
        <div className="member-detail">
            <div>Mabie, where did you go? We just started this jumping puzzle.</div>
            <div><span style={{ fontStyle: 'italic' }}>"@#$@ that. I'm in orbit."</span></div>
        </div>
    </div>
)

const Members = () => {
    return (
        <div className="main-tab-content">
            <div><Typography use="headline6">Our clan members have their own things to share with the community. Check out their web pages / creations!</Typography> </div>
            <Grid style={{ paddingLeft: '0', paddingRight: '0' }}>
                <GridCell><Ace /></GridCell>
                <GridCell><Samus /></GridCell>
                <GridCell><W6MIR /></GridCell>
                <GridCell><Nutbar /></GridCell>
                <GridCell><Silly /></GridCell>
                <GridCell><Halily /></GridCell>
                <GridCell><Momo /></GridCell>
                <GridCell><Mabie /></GridCell>
            </Grid>
            <div>Want your own entry? Tell Samus what you want and he'll put it in!</div>
        </div>
    )
}

export default Members