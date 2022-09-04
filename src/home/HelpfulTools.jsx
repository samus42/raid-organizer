import { Typography, Button, Stack, Grid } from "@mui/material"
import { useNavigate } from "react-router-dom"
const discipleThirdEncounterMap = "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2022/03/Destiny-2-Vow-of-the-Disciple-Upended-Map.jpg?q=50&fit=crop&w=750&dpr=1.5"
const discipleRhulkMap = "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2022/03/Destiny-2-Vow-of-the-Disciple-Rhulk-Final-Room-Callouts.jpg?q=50&fit=crop&w=750&dpr=1.5"
const golgorothsCellarMap = "https://cdn.mos.cms.futurecdn.net/EEuCVJGqzqDynBBXu8M8wb-1200-80.jpg"
const oryxMap = "https://i.imgur.com/3KUEolS.png"
const HelpfulTools = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div style={{ marginBottom: '10px' }}><Typography variant="h4">Helpful Tools</Typography></div>
            <Grid container spacing={10}>
                <Grid item md={6}>
                    <Typography variant="h6">Taken King</Typography>
                    <Stack spacing={2} sx={{ maxWidth: '400px' }}>
                        <Button onClick={() => navigate('/tools/tkk-puzzle')} variant="contained">Taken King Extra Chest Instructions</Button>
                        <a rel="noreferrer" target="_blank" href={golgorothsCellarMap}><Button sx={{ width: '100%' }} variant="contained">{`Golgoroth's Cellar Map`}</Button></a>
                        <a rel="noreferrer" target="_blank" href={oryxMap}><Button sx={{ width: '100%' }} variant="contained">{`Oryx Map`}</Button></a>

                    </Stack>
                </Grid>
                <Grid item md={6}>
                    <Typography variant="h6">Vow Of The Disciple</Typography>
                    <Stack spacing={2} sx={{ maxWidth: '400px' }}>
                        <Button variant="contained" onClick={() => navigate('/tools/disciple')}>Disciple Symbols</Button>
                        <Button onClick={() => navigate('/tools/disciple-puzzle')} variant="contained">Disciple Extra Chest Instructions</Button>
                        <a rel="noreferrer" target="_blank" href={discipleThirdEncounterMap}><Button sx={{ width: '100%' }} variant="contained">Disciple 3rd Encounter Map</Button></a>
                        <a rel="noreferrer" target="_blank" href={discipleRhulkMap}><Button sx={{ width: '100%' }} variant="contained">Disciple Rhulk Platform Map</Button></a>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}

export default HelpfulTools