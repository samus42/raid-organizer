import { Typography, Button, Stack } from "@mui/material"
import { useNavigate } from "react-router-dom"
const discipleThirdEncounterMap = "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2022/03/Destiny-2-Vow-of-the-Disciple-Upended-Map.jpg?q=50&fit=crop&w=750&dpr=1.5"
const discipleRhulkMap = "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2022/03/Destiny-2-Vow-of-the-Disciple-Rhulk-Final-Room-Callouts.jpg?q=50&fit=crop&w=750&dpr=1.5"

const HelpfulTools = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div style={{ marginBottom: '10px' }}><Typography variant="h4">Helpful Tools</Typography></div>
            <Stack spacing={2} sx={{ maxWidth: '400px' }}>
                <Button variant="contained" onClick={() => navigate('/tools/disciple')}>Disciple Symbols</Button>
                <a rel="noreferrer" target="_blank" href={discipleThirdEncounterMap}><Button sx={{ width: '100%' }} variant="contained">Disciple 3rd Encounter Map</Button></a>
                <a rel="noreferrer" target="_blank" href={discipleRhulkMap}><Button sx={{ width: '100%' }} variant="contained">Disciple Rhulk Platform Map</Button></a>
            </Stack>
        </div>
    )
}

export default HelpfulTools