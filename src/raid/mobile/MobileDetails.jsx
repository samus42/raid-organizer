import React from 'react'
import { TextField } from '@rmwc/textfield'
import { Button } from '@rmwc/button'
import DateTimePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const MobileDetails = ({ instanceName, date, saveEnabled, onChange = () => { }, onSave = () => { } }) => {
    return (
        <div>
            <div style={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '10px' }}><Button raised disabled={!saveEnabled} onClick={onSave}>Save Changes</Button></div>

            <div style={{ paddingTop: '50px' }}>
                <TextField style={{ width: '100%' }} label="Create a name for this run!" value={instanceName} onChange={(evt) => onChange({ instanceName: evt.target.value, date })} />
            </div>
            <div style={{ paddingTop: '50px' }}>
                <label>What time do you want to go?</label>
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