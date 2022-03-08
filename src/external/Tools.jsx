import { Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
const Tools = () => {
    const navigate = useNavigate()
    return (
        <div className="main-tab-content">
            <Typography variant="h4">Useful tools, for raiding and what not.</Typography>
            <div>
                We've created some nice tools over the years to assist with our raids, dungeons, etc, etc. Apparently some people are interested in using these as well, over time we'll add to the list below. But right now we'll start with the Disciple Raid Symbols tool that people seem to be interested in.
            </div>
            <div style={{ marginTop: '20px' }}>
                <Button onClick={() => navigate('/public/tools/disciple')} variant="contained">Disciple Symbols</Button>
            </div>
        </div>
    )
}

export default Tools