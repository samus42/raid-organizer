import React, { useMemo } from 'react'
import debounce from 'lodash.debounce'
import { TextField, Button } from '@mui/material'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const MobileDetails = ({ instanceName, date, saveEnabled, onChange = () => { }, onSave = () => { } }) => {

    const debouncedSave = useMemo(() => debounce(onSave, 300), [onSave])

    return (
        <div>
            <div style={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '10px' }}><Button variant="contained" disabled={!saveEnabled} onClick={debouncedSave}>Save Changes</Button></div>

            <div style={{ paddingTop: '50px' }}>
                <TextField fullWidth variant='filled' label="Create a name for this run!" value={instanceName} onChange={(evt) => onChange({ instanceName: evt.target.value, date })} />
            </div>
            <div style={{ paddingTop: '50px' }}>
                <div>What time do you want to go?</div>
                <DateTimePicker
                    onChange={(val) => onChange({ instanceName, date: val })}
                    value={date}
                    minutesStep={5}
                    renderInput={(params) => <TextField fullWidth {...params} />}
                />
            </div>
            {!saveEnabled && (
                <div style={{ marginTop: '30px' }}><strong>You must enter a name and date before saving.</strong></div>
            )}
        </div>
    )
}

export default MobileDetails