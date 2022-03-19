import { DatePicker } from "@mui/lab"
import { TextField, Typography } from "@mui/material"
import dayjs from 'dayjs'
import { useState } from "react"
import { getWellspring } from "./wellspring"
import { getLostSector } from "./lostSectors"

const LostSector = ({ date }) => {
    const lostSector = getLostSector(date)
    return (
        <div>
            <Typography variant="h5">Lost Sector</Typography>
            <div style={{ paddingLeft: '10px' }}>
                <div><strong>{lostSector.name}</strong> ({lostSector.area})</div>
                <div>Reward: {lostSector.reward}</div>
            </div>
        </div>
    )
}

const Wellspring = ({ date }) => {
    const wellspring = getWellspring(date)
    return (
        <div>
            <Typography variant="h5">Wellspring</Typography>
            <div style={{ paddingLeft: '10px' }}>
                <div><strong>{wellspring.stage}</strong> ({wellspring.boss})</div>
                <div>Reward: {wellspring.reward}</div>
            </div>
        </div>
    )
}
const DisplayRotation = () => {
    const [selectedDate, setSelectedDate] = useState(dayjs().format('MM/DD/YYYY'))
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div style={{ alignSelf: 'center', paddingRight: '20px' }}>
                    <Typography variant="h4">Daily Activities</Typography>
                </div>
                <div><DatePicker value={selectedDate} onChange={setSelectedDate} label="Date" renderInput={(params) => <TextField {...params} />} /></div>

            </div>

            <div style={{ paddingLeft: '0px' }}>
                <div>
                    <LostSector date={selectedDate} />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <Wellspring date={selectedDate} />
                </div>
            </div>
        </div>
    )
}

export default DisplayRotation