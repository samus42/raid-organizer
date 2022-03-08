import React from 'react'
import { Grid, Typography } from '@mui/material'

const MemberCard = ({ name, iconUrl, children }) => (
    <Grid item>
        <div className="member-card">
            <div>
                <img alt="icon" src={iconUrl} style={{ height: '180px' }} />
            </div>
            <Typography variant="h4">{name}</Typography>
            {children}
        </div>
    </Grid>

)

const W6MIR = () => (
    <MemberCard name="W6MIR" iconUrl="https://www.bungie.net//img/profile/avatars/cc22.jpg">
        <div className="member-detail">
            <strong>Alert!</strong> Under Section 8, Paragraph 4 of the Clan Charter, W6MIR will not be obligated to be fireteam leader under any circumstance.
        </div>
        <div>
            <small>And no, he has no interest in playing Gambit with you.</small>
        </div>
    </MemberCard>
)

const Ace = () => (
    <MemberCard name="Ace Malicious" iconUrl="https://www.bungie.net//img/profile/avatars/avatar23.jpg">
        <div className="member-detail">
            <span style={{ fontStyle: 'italic' }}>"I'm tired of people saying I'm directionally challenged! Now follow me, it's to the right!"</span>
        </div>
        <div className="member-detail">
            That's a broom closet.
        </div>
        <div>
            <span style={{ fontStyle: 'italic' }}>"Damn it to hell!"</span>
        </div>
    </MemberCard>
)

const Samus = () => (
    <MemberCard name="Samus Darkthorn" iconUrl="https://www.bungie.net/img/profile/avatars/e2015_14.jpg">
        <div className="member-detail">
            <strong>Meat Shield</strong>
        </div>
        <div className="member-detail">
            We think the opposite team is around the corner, go look.
        </div>
        <div className="member-detail">
            <span style={{ fontStyle: 'italic' }}>[Gun shots]"Ow! Ow! Ow! Ow! So many holes in me!"</span>
        </div>
        <div className="member-detail">
            Great job! We flanked them while they were shooting you. On to the next capture point!
        </div>
        <div className="member-detail">
            <span style={{ fontStyle: 'italic' }}>Wait...wait...medic...</span>
        </div>
    </MemberCard>
)

const Nutbar = () => (
    <MemberCard name="Malkavian Nutbar" iconUrl="https://www.bungie.net//img/profile/avatars/avatar2.jpg">
        <div className="member-detail">
            <span style={{ fontStyle: 'italic' }}>"Empowered Left"</span>
        </div>
        <div className="member-detail">
            Has a secret superpower. He can cause his clan to complete any raid with just one sentence. <span style={{ fontStyle: 'italic' }}>"Guys, this is my last run."</span>
        </div>
        <div className="member-detail">
            <small>And his other character is ALSO a Warlock...</small>
        </div>
    </MemberCard>
)

const ThirdEye = () => (
    <MemberCard name="ThirdEye" iconUrl="https://www.bungie.net/img/profile/avatars/odst_skull_fire.png">
        <div className="member-detail">
            <div><strong>Q:</strong><span> What do you use when fighting Fallen?</span></div>
            <div><strong>A:</strong><span> A bow.</span></div>
            <div><strong>Q:</strong><span> What do you use when fighting an armored boss?</span></div>
            <div><strong>A:</strong><span> A bow.</span></div>
            <div><strong>Q:</strong><span> What do you use when fighting a bow proof boss?</span></div>
            <div><strong>A:</strong><span> A bow.</span></div>
        </div>
    </MemberCard>
)

const Halily = () => (
    <MemberCard name="Halily" iconUrl="https://www.bungie.net//img/profile/avatars/cc24.jpg">
        <div className="member-detail">
            <span style={{ fontStyle: 'italic' }}>"God@#$@ @%#@ing @#@$% of a jumping puzzle."</span>
        </div>
        <div className="member-detail">
            This is a public site, you can't say things like that!
        </div>
        <div className="member-detail">
            <span style={{ fontStyle: 'italic' }}>"@#$# you, you @#$@ing @#$wipe mother @#$@er"</span>
        </div>
    </MemberCard>
)

const Momo = () => (
    <MemberCard name="Momo" iconUrl="https://www.bungie.net//img/profile/avatars/cc25.jpg">
        <div className="member-detail">
            <span style={{ fontStyle: 'italic' }}>"Can you remind me which weapons I killed you with? I've lost track."</span>
        </div>
        <div className="member-detail">
            If he tells you something's going to be easy. <strong>RUN</strong>
        </div>
    </MemberCard>
)

const Mabie = () => (
    <MemberCard name="Mabie" iconUrl="https://www.bungie.net//img/profile/avatars/attention2.gif">
        <div className="member-detail">
            <span style={{ fontStyle: 'italic' }}>"Hey, this orange glowing Shank followed me home, can we keep it?"</span>
        </div>
        <div className="member-detail">
            <div>Mabie, where did you go? We just started this jumping puzzle.</div>
            <div><span style={{ fontStyle: 'italic' }}>"@#$@ that. I'm in orbit."</span></div>
        </div>
    </MemberCard>
)

const Kaizyn = () => (
    <MemberCard name="Kaizyn" iconUrl="https://www.bungie.net//img/profile/avatars/septagonsuperanimated6.gif">
        <div className="member-detail">
            <strong>Chief Interrogator</strong>
        </div>
        <div className="member-detail">
            <div><span style={{ fontStyle: 'italic' }}>"Before I let you go, I need to know your college roommate's sister's best friend's middle name."</span></div>
        </div>
    </MemberCard>
)

const KaiJae = () => (
    <MemberCard name="KaiJae" iconUrl="https://www.bungie.net//img/profile/avatars/cc25.jpg">
        <div className="member-detail">
            <div><span style={{ fontStyle: 'italic' }}>"You're right, that WAS a hard bounty. It took me 3 matches to get 250 sniper kills in the Crucible.  Rough."</span></div>
        </div>
        <div className="member-detail">
            <div><span style={{ fontStyle: 'italic' }}>"What do you mean you're having trouble getting a PS5?"</span></div>
        </div>
    </MemberCard>
)

const GMann = () => (
    <MemberCard name="GMann" iconUrl="https://www.bungie.net//img/profile/avatars/e2015_11.jpg">
        <div>Ok, for Atraks-1 we need to decide who is go-</div>
        <div><span style={{ fontStyle: 'italic' }}>"I'm going to space."</span></div>
        <div>GMann, you should probably let others-</div>
        <div><span style={{ fontStyle: 'italic' }}>{`[Gun cocks] "I'm going to space."`}</span></div>
        <div>Oooook, you are going to space. You can be operat-</div>
        <div><span style={{ fontStyle: 'italic' }}>{`[Gunshot]`}</span></div>
    </MemberCard>
)

const Stink = () => (
    <MemberCard name="Stink Machine" iconUrl="https://www.bungie.net//img/profile/avatars/bungieday_19.jpg">
        <div className="member-detail">
            <div>[Stickmachine has joined your fireteam]</div>
            <div>Hey man! Long time so see! How you doing?</div>
            <div>[Stickmachine has gained a level]</div>
            <div>[Stickmachine has left your fireteam]</div>
            <div>I....I've been used...for shared wisdom.</div>
            <div>[crying sounds]</div>
        </div>
    </MemberCard>
)

const Nekro = () => (
    <MemberCard name="Nekronomikan" iconUrl="https://www.bungie.net//img/profile/avatars/cc000011.jpg">
        <div className="member-detail">
            <strong>Apex Predator</strong>
        </div>
        <div className="member-detail">
            <div>You think you're better than me? The fact that you're not a Hunter means that you're not.</div>
            <div>We're better than you in <strong>everything</strong>.</div>
            <div>That's right, even <span style={{ fontStyle: 'italic' }}>etiquette</span>.</div>
            <div>Our table manners are <strong>impeccable</strong>!</div>
        </div>
    </MemberCard>
)

const Hada = () => (
    <MemberCard name="Hadashirts" iconUrl="https://www.bungie.net/img/profile/avatars/cc21.jpg">
        <div className="member-detail">
            <strong>Gotta snag a Hada</strong>
        </div>
        <div className="member-detail">
            <div><span style={{ fontStyle: 'italic' }}>"I'm sorry, I'm not sure what I'm doing."</span></div>
            <div>You wiped out all the enemies in record time!</div>
            <div><span style={{ fontStyle: 'italic' }}>"So....that's good...right?"</span></div>
        </div>
    </MemberCard>
)

const Tansy = () => (
    <MemberCard name="TansyRagwort" iconUrl="https://image.api.np.km.playstation.net/images/?format=png&w=160&h=160&image=https%3A%2F%2Fkfscdn.api.np.km.playstation.net%2F5387964934898443052%2F1541722837287.png&sign=1cc7d0286c4fc59c83ec1f0c6a37f2d414df1daa">
        <div className="member-detail">
            <strong>Ringer</strong><small style={{ marginLeft: '5px' }}>Also Samus's Best Friend</small>
        </div>
        <div className="member-detail">
            <div><small>Based on Real Life</small></div>
            <div><span style={{ fontStyle: 'italic' }}>"Thanks Blueberry!"</span></div>
            <div>I'm in your voice chat right now, I'm in your clan!</div>
            <div><span style={{ fontStyle: 'italic' }}>"That's a good Blueberry, good job."</span></div>
        </div>
    </MemberCard>
)

const KillerPotatoez = () => (
    <MemberCard name="KillerPotatoez" iconUrl="https://www.bungie.net//img/profile/avatars/cc47.jpg">
        <div className="member-detail">
            <div>We would like to formally apologize for the comments made by KillerPotatoez on Monday, Tuesday, Thursday, Friday, Saturday, and Sunday.</div>
            <div>After a formal investigation, we retract our apology for Wednesday.</div>
            <div>DNA analysis concluded that yes, he is your daddy.</div>
        </div>
    </MemberCard>
)

const Wdnesday = () => (
    <MemberCard name="Wdnesday" iconUrl="https://www.bungie.net//img/profile/avatars/cc12.jpg">
        <div className="member-detail">
            <div>Is that your pet turtle?</div>
            <div><span style={{ fontStyle: 'italic' }}>"Yup! Isn't he cute?"</span></div>
            <div>Wait... is that a Rocket Launcher on its shell?</div>
            <div><span style={{ fontStyle: 'italic' }}>[Explosion]</span></div>
            <div><span style={{ fontStyle: 'italic' }}>"Yup! Isn't it cute?"</span></div>
        </div>
    </MemberCard>
)
//style={{ height: '180px' }}
const Darkwomble = () => (
    <MemberCard name="Darkwomble" iconUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWEvoJqVSiysJaQ1l3e0ofHo3Nxj6fHt9a_A&usqp=CAU">
        <div className="member-detail">
            <div>Ok, here's how this next part works- </div>
            <div><span style={{ fontStyle: 'italic' }}>[Explosions and gunfire erupts]</span></div>
            <div>Who started the encounter?</div>
            <div><span style={{ fontStyle: 'italic' }}>Not me! / I didn't move! / Not I! / I was in the bathroom!</span></div>
            <div>Womble?</div>
            <div><span style={{ fontStyle: 'italic' }}>"Uh... cheers mate!"</span></div>
        </div>
    </MemberCard>
)


const Harmony = () => (
    <MemberCard name="Harmony" iconUrl="https://www.bungie.net//img/profile/avatars/cc24.jpg">
        <div className="member-detail">
            <div>Hey Harmony, want to raid?</div>
            <div><span style={{ fontStyle: 'italic' }}>"Of course! But can we do the Lava challenge?"</span></div>
            <div>The <span style={{ fontWeight: 'bold' }}>what</span> now?</div>
            <div><span style={{ fontStyle: 'italic' }}>"You know, the one where every encounter is done without touching the floor."</span></div>
            <div>Uhh... I guess...</div>
            <div><span style={{ fontStyle: 'italic' }}>"Oh, and you have use sidearms for every kill."</span></div>
            <div><span style={{ fontStyle: 'italic' }}>"Hello? Hello?"</span></div>
        </div>
    </MemberCard>
)

const CatNoir = () => (
    <MemberCard name="CatNoir" iconUrl="https://www.bungie.net//img/profile/avatars/cc54.jpg">
        <div className="member-detail">
            <div>Okay, so Cat we need you to-</div>
            <div><span style={{ fontStyle: 'italic' }}>"I just shoot things."</span></div>
            <div>Well... yes... but also you need to carry the orb-</div>
            <div><span style={{ fontStyle: 'italic' }}>[Gunshot]</span></div>
            <div>You killed our team leader! Why?!</div>
            <div><span style={{ fontStyle: 'italic' }}>"As I said, I just shoot things."</span></div>
        </div>
    </MemberCard>
)

const Wendy = () => (
    <MemberCard name="Wdimunoz" iconUrl="https://www.bungie.net//img/profile/avatars/cc000014.jpg">
        <div className="member-detail">
            <div>[Quick rifle shots in succession]</div>
            <div><span style={{ fontStyle: 'italic' }}>She's a good shot, even if she doesn't say much.</span></div>
            <div>You haven't seen the half of it.</div>
            <div>[Submachine gun fire]</div>
            <div><span style={{ fontStyle: 'italic' }}>Wait, did she just write 'Sorry, I meant to hit that last one in the right eye instead of the left.' on the wall, <strong>with bullets?!</strong></span></div>
            <div>Yeah, her y's are still a bit shakey, we're working on that.</div>
        </div>
    </MemberCard>
)

const Cody = () => (
    <MemberCard name="Wilhelm_MD" iconUrl='https://www.bungie.net//img/profile/avatars/cc000011.jpg'>
        <div className="member-detail">
            <div>Yo doc! There's this mole...</div>
            <div><span style={{ fontStyle: 'italic' }}>Not that kind of doctor.</span></div>
            <div>Well then, I think my cholesterol-</div>
            <div><span style={{ fontStyle: 'italic' }}>Nope.</span></div>
            <div>There's this ringing in my ears...</div>
            <div><span style={{ fontStyle: 'italic' }}>Sigh, no.</span></div>
            <div>Well what the hell are you good for- [Cracking sounds] Ow! You broke my back!</div>
            <div><span style={{ fontStyle: 'italic' }}>That, I'm good at that.</span></div>
        </div>
    </MemberCard>
)
const Members = () => {
    return (
        <div className="main-tab-content">
            <Grid container spacing={4}>
                <Ace />
                <CatNoir />
                <Darkwomble />
                <GMann />
                <Hada />
                <Halily />
                <Harmony />
                <Kaizyn />
                <KaiJae />
                <KillerPotatoez />
                <Mabie />
                <Nutbar />
                <Momo />
                <Nekro />
                <Samus />
                <Stink />
                <Tansy />
                <ThirdEye />
                <W6MIR />
                <Wendy />
                <Wdnesday />
                <Cody />
            </Grid>
            <div style={{ paddingTop: '20px', paddingBottom: '10px' }}>Want your own entry? Tell Samus what you want and he'll put it in!</div>
        </div>
    )
}

export default Members