import { useState, useLayoutEffect } from 'react'
import { Grid, Card, CardActionArea, Typography, Button, Stack } from '@mui/material'
import { useNavigate } from "react-router-dom"

const discipleThirdEncounterMap = "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2022/03/Destiny-2-Vow-of-the-Disciple-Upended-Map.jpg?q=50&fit=crop&w=750&dpr=1.5"
const discipleRhulkMap = "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2022/03/Destiny-2-Vow-of-the-Disciple-Rhulk-Final-Room-Callouts.jpg?q=50&fit=crop&w=750&dpr=1.5"
const golgorothsCellarMap = "https://cdn.mos.cms.futurecdn.net/EEuCVJGqzqDynBBXu8M8wb-1200-80.jpg"
const oryxMap = "https://i.imgur.com/3KUEolS.png"

const SubjectCard = ({ imagePath, title, screenLayout, onClick }) => {
    const titleSize = screenLayout === 'desktop' ? 'h5' : 'subtitle1'
    const imageSize = screenLayout === 'desktop' ? '120px' : '80px'
    const cardWidth = screenLayout === 'desktop' ? '250px' : '170px'
    return (
        <Grid item sx={6} md={3}>
            <Card sx={{ maxHeight: '200px', width: cardWidth }}>
                <CardActionArea onClick={onClick}>
                    <div style={{ padding: '2px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={imagePath} style={{ width: imageSize, height: imageSize }} alt={title} />

                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography variant={titleSize}>{title}</Typography>
                        </div>
                    </div>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

function KingsFallPanel({ onNavigate }) {
    const navigate = useNavigate()
    return (
        <div>
            <Typography variant="h6">Taken King</Typography>
            <Stack spacing={2} sx={{ maxWidth: '400px' }}>
                <Button onClick={() => navigate('/tools/tkk-puzzle')} variant="contained">Taken King Extra Chest Instructions</Button>
                <a rel="noreferrer" target="_blank" href={golgorothsCellarMap}><Button sx={{ width: '100%' }} variant="contained">{`Golgoroth's Cellar Map`}</Button></a>
                <a rel="noreferrer" target="_blank" href={oryxMap}><Button sx={{ width: '100%' }} variant="contained">{`Oryx Map`}</Button></a>
            </Stack>
        </div>
    )
}

function VowPanel() {
    const navigate = useNavigate()
    return (
        <div>
            <Typography variant="h6">Vow Of The Disciple</Typography>
            <Stack spacing={2} sx={{ maxWidth: '400px' }}>
                <Button variant="contained" onClick={() => navigate('/tools/disciple')}>Disciple Symbols</Button>
                <Button onClick={() => navigate('/tools/disciple-puzzle')} variant="contained">Disciple Extra Chest Instructions</Button>
                <a rel="noreferrer" target="_blank" href={discipleThirdEncounterMap}><Button sx={{ width: '100%' }} variant="contained">Disciple 3rd Encounter Map</Button></a>
                <a rel="noreferrer" target="_blank" href={discipleRhulkMap}><Button sx={{ width: '100%' }} variant="contained">Disciple Rhulk Platform Map</Button></a>
            </Stack>
        </div>
    )
}

function NightmarePanel() {
    const macrocosmMap = 'https://imgur.com/a/rROiP1P'
    return (
        <div>
            <Typography variant="h6">Root of Nightmares</Typography>
            <Stack spacing={2} sx={{ maxWidth: '400px' }}>
                <a rel="noreferrer" target="_blank" href={macrocosmMap}><Button sx={{ width: '100%' }} variant="contained">Macrocosm Map</Button></a>
            </Stack>
        </div>
    )
}//mlsfs
function TopLevelPanel({ screenLayout, onChangePanel }) {
    return (
        <Grid container spacing={1}>
            <SubjectCard imagePath="/activities/nightmares.png" title="Root of Nightmares" screenLayout={screenLayout} onClick={() => { onChangePanel("nightmare") }} />
            <SubjectCard imagePath="/activities/takenking.png" title="Taken King" screenLayout={screenLayout} onClick={() => { onChangePanel("kf") }} />
            <SubjectCard imagePath="/activities/disciple.png" title="Vow of the Disciple" screenLayout={screenLayout} onClick={() => { onChangePanel("vow") }} />
            <SubjectCard imagePath="/loot-chest.png" title="Loot Tables" screenLayout={screenLayout} onClick={() => window.open("https://www.blueberries.gg/weapons/destiny-2-loot-tables/", "_blank")} />
        </Grid>
    )
}

const components = {
    kf: KingsFallPanel,
    vow: VowPanel,
    nightmare: NightmarePanel
}

export function HelpfulToolsContainer() {
    const [screenLayout, setScreenLayout] = useState('desktop')
    const [subPanel, setSubPanel] = useState(null)

    useLayoutEffect(() => {
        const updateSize = () => {
            if (window.innerWidth < 1025) {
                setScreenLayout('mobile')
            }
            else {
                setScreenLayout('desktop')
            }
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, [])

    if (subPanel) {
        if (!components[subPanel]) {
            console.log('subpane: ', subPanel)
            throw new Error('Invalid subpanel: ', subPanel)
        }
        const SubComponent = components[subPanel]
        if (screenLayout === 'mobile') {
            return (<div>
                <div style={{ marginBottom: '10px' }}><Typography variant="h4">Helpful Tools</Typography></div>

                <div>
                    <SubComponent />
                    <div style={{ textAlign: 'center', paddingTop: '5px' }}>
                        <Button onClick={() => setSubPanel(null)}>Back To Other Tools</Button>
                    </div>
                </div>
            </div>)
        }
        return (
            <div>
                <div style={{ marginBottom: '10px' }}><Typography variant="h4">Helpful Tools</Typography></div>

                <div style={{ display: 'flex' }}>
                    <div style={{ paddingRight: '20px' }}>
                        <Button onClick={() => setSubPanel(null)}>Back To Other Tools</Button>
                    </div>
                    <SubComponent />
                </div>
            </div>
        )
    }

    return (
        <div>
            <div style={{ marginBottom: '10px' }}><Typography variant="h4">Helpful Tools</Typography></div>
            <TopLevelPanel onChangePanel={setSubPanel} screenLayout={screenLayout} />
        </div>

    )
}