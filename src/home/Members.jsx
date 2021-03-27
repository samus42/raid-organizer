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
            <strong>Meat Shield</strong>
        </div>
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

const Kaizyn = () => (
    <div className="member-card">
        <div>
            <img alt="icon" src="https://www.bungie.net//img/profile/avatars/septagonsuperanimated6.gif" />
        </div>
        <Typography use="headline4">Kaizyn</Typography>
        <div className="member-detail">
            <strong>Chief Interrogator</strong>
        </div>
        <div className="member-detail">
            <div><span style={{ fontStyle: 'italic' }}>"Before I let you go, I need to know your college roommate's sister's best friend's middle name."</span></div>
        </div>
    </div>
)

const KaiJae = () => (
    <div className="member-card">
        <div>
            <img alt="icon" src="https://www.bungie.net//img/profile/avatars/cc25.jpg" />
        </div>
        <Typography use="headline4">KaiJae</Typography>
        <div className="member-detail">
            <div><span style={{ fontStyle: 'italic' }}>"You're right, that WAS a hard bounty. It took me 3 matches to get 250 sniper kills in the Crucible.  Rough."</span></div>
        </div>
        <div className="member-detail">
            <div><span style={{ fontStyle: 'italic' }}>"What do you mean you're having trouble getting a PS5?"</span></div>
        </div>
    </div>
)

const GMann = () => (
    <div className="member-card">
        <div>
            <img alt="icon" src="https://www.bungie.net//img/profile/avatars/e2015_11.jpg" />
        </div>
        <Typography use="headline4">GMann</Typography>
        <div className="member-detail">
            <div>Ok, for Atraks-1 we need to decide who is go-</div>
            <div><span style={{ fontStyle: 'italic' }}>"I'm going to space."</span></div>
            <div>GMann, you should probably let others-</div>
            <div><span style={{ fontStyle: 'italic' }}>{`[Gun cocks] "I'm going to space."`}</span></div>
            <div>Oooook, you are going to space. You can be operat-</div>
            <div><span style={{ fontStyle: 'italic' }}>{`[Gunshot]`}</span></div>
        </div>
    </div>
)

const Stink = () => (
    <div className="member-card">
        <div>
            <img alt="icon" src="https://www.bungie.net//img/profile/avatars/bungieday_19.jpg" />
        </div>
        <Typography use="headline4">Stink Machine</Typography>
        <div className="member-detail">
            <div>[Stickmachine has joined your fireteam]</div>
            <div>Hey man! Long time so see! How you doing?</div>
            <div>[Stickmachine has gained a level]</div>
            <div>[Stickmachine has left your fireteam]</div>
            <div>I....I've been used...for shared wisdom.</div>
            <div>[crying sounds]</div>
        </div>
    </div>
)

const Nekro = () => (
    <div className="member-card">
        <div>
            <img alt="icon" src="https://www.bungie.net//img/profile/avatars/cc000011.jpg" />
        </div>
        <Typography use="headline4">Nekronomikan</Typography>
        <div className="member-detail">
            <strong>Apex Predator</strong>
        </div>
        <div className="member-detail">
            <div>You think you're better than me? The fact that you're not a Hunter means that you're not.</div>
            <div>We're better than you in <strong>everything</strong>.</div>
            <div>That's right, even <span style={{ fontStyle: 'italic' }}>etiquette</span>.</div>
            <div>Our table manners are <strong>impeccable</strong>!</div>
        </div>
    </div>
)

const Hada = () => (
    <div className="member-card">
        <div>
            <img alt="icon" src="https://www.bungie.net/img/profile/avatars/cc21.jpg" />
        </div>
        <Typography use="headline4">Hadashirts</Typography>
        <div className="member-detail">
            <strong>Gotta snag a Hada</strong>
        </div>
        <div className="member-detail">
            <div><span style={{ fontStyle: 'italic' }}>"I'm sorry, I'm not sure what I'm doing."</span></div>
            <div>You wiped out all the enemies in record time!</div>
            <div><span style={{ fontStyle: 'italic' }}>"So....that's good...right?"</span></div>
        </div>
    </div>
)

const Tansy = () => (
    <div className="member-card">
        <div>
            <img alt="icon" src="https://image.api.np.km.playstation.net/images/?format=png&w=160&h=160&image=https%3A%2F%2Fkfscdn.api.np.km.playstation.net%2F5387964934898443052%2F1541722837287.png&sign=1cc7d0286c4fc59c83ec1f0c6a37f2d414df1daa" />
        </div>
        <Typography use="headline4">TansyRagwort</Typography>
        <div className="member-detail">
            <strong>Ringer</strong><small style={{ marginLeft: '5px' }}>Also Samus's Best Friend</small>
        </div>
        <div className="member-detail">
            <div><small>Based on Real Life</small></div>
            <div><span style={{ fontStyle: 'italic' }}>"Thanks Blueberry!"</span></div>
            <div>I'm in your voice chat right now, I'm in your clan!</div>
            <div><span style={{ fontStyle: 'italic' }}>"That's a good Blueberry, good job."</span></div>
        </div>
    </div>
)

const Members = () => {
    return (
        <div className="main-tab-content">
            <div><Typography use="headline6">Our clan members have their own things to share with the community. Check out their web pages / creations!</Typography> </div>
            <Grid style={{ paddingLeft: '0', paddingRight: '0' }}>
                <GridCell><Ace /></GridCell>
                <GridCell><GMann /></GridCell>
                <GridCell><Hada /></GridCell>
                <GridCell><Halily /></GridCell>
                <GridCell><Momo /></GridCell>
                <GridCell><Nekro /></GridCell>
                <GridCell><Kaizyn /></GridCell>
                <GridCell><KaiJae /></GridCell>
                <GridCell><Mabie /></GridCell>
                <GridCell><Nutbar /></GridCell>
                <GridCell><Samus /></GridCell>
                <GridCell><Silly /></GridCell>
                <GridCell><Stink /></GridCell>
                <GridCell><Tansy /></GridCell>
                <GridCell><W6MIR /></GridCell>
            </Grid>
            <div>Want your own entry? Tell Samus what you want and he'll put it in!</div>
        </div>
    )
}

export default Members