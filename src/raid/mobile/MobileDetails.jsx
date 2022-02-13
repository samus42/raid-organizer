import React from 'react'
import { TextField, Button } from '@mui/material'
import DateTimePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const MobileDetails = ({ instanceName, date, saveEnabled, onChange = () => { }, onSave = () => { } }) => {
    return (
        <div>
            <div style={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '10px' }}><Button variant="contained" disabled={!saveEnabled} onClick={onSave}>Save Changes</Button></div>

            <div style={{ paddingTop: '50px' }}>
                <TextField fullWidth variant='filled' label="Create a name for this run!" value={instanceName} onChange={(evt) => onChange({ instanceName: evt.target.value, date })} />
            </div>
            <div style={{ paddingTop: '50px' }}>
                <div>What time do you want to go?</div>
                <DateTimePicker
                    onChange={(val) => onChange({ instanceName, date: val })}
                    selected={date}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={5}
                    timeCaption="time"
                    dateFormat="iii MM/dd hh:mm a" />
            </div>
            {!saveEnabled && (
                <div style={{ marginTop: '30px' }}><strong>You must enter a name and date before saving.</strong></div>
            )}
        </div>
    )
}

export default MobileDetails