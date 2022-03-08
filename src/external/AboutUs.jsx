import { Typography, Grid } from "@mui/material"
const AboutUs = () => {
    return (
        <div className="main-tab-content">
            <Typography variant="h4">Welcome to the Shenaniganizers!</Typography>
            <Grid container spacing={5}>
                <Grid item md={6} >
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5">So who are we?</Typography>
                    </div>
                    <p>
                        We're a just group that likes to get together and have fun, most of the time on Destiny. Our membership criteria can be boiled down to a simple requirement.
                    </p>
                    <p><strong>Don't be a jerk.</strong> It's a good rule, it works for us.</p>
                    <p>
                        Some people are good at the PvP, some people are good at the PvE, some are still learning the game. Doesn't matter to us, we'll help each other get through any roadblock that is out there. Nothing motivates our clan like the phrase "I've never finished [insert raid/dungeon/mission here]".
                    </p>
                    <p>
                        It doesn't matter to us that you think you suck at the game. We've all sucked at the game, that's not important. What's important is we get together and have fun progressing through it.
                    </p>
                    <p>And we have more fun than any other clan out there, I have a graph to prove it!</p>
                    <p>
                        <img style={{ width: '400px' }} src='/external/ClanFunChart.png' alt="fun chart" />
                    </p>
                    <p>
                        Intersted in joining our clan? Get in touch with us <strong>USING METHOD NOT YET DETERMINED</strong>
                    </p>
                    <p>
                        <small>Disclaimer: Our clan might be slightly, just a teensy bit, completely addicted to raids.</small>
                    </p>
                </Grid>
                <Grid item md={5}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5">So what's on this site?</Typography>
                    </div>
                    <p>
                        Excellent question, I'm glad you asked!
                    </p>
                    <p>
                        The <strong>Publications</strong> tab will take you to guides and novels we've written.
                        That's right, I said novels. We've written actual books. You should read them, they're quite good.
                    </p>
                    <p>
                        The <strong>Tools</strong> tab will be where we share some of the quality of life tools we've writen to make raids/dungeons/whatever less stressful. There isn't a lot there right now, since our main planning tools are tied to our actual clan roster. But as we figure out how to share them, they will show up there.
                    </p>
                </Grid>
            </Grid>
        </div>
    )
}

export default AboutUs