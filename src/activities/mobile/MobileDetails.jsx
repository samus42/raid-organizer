import React from 'react'
import { TextField } from '@rmwc/textfield'
import { Button } from '@rmwc/button'
import { Slider } from '@rmwc/slider'
import DateTimePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const MobileDetails = ({ instanceName, date, maxPlayers, saveEnabled, activity, onChange = () => { }, onSave = () => { }, onArchive = () => { } }) => {
    return (
        <div>
            <div style={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '10px' }}><Button raised disabled={!saveEnabled} onClick={onSave}>Save Changes</Button></div>

            <div style={{ paddingTop: '50px' }}>
                <TextField style={{ width: '100%' }} label="Create a name for this activity!" value={instanceName} onChange={(evt) => onChange({ instanceName: evt.target.value, date, maxPlayers })} />
            </div>
            <div style={{ paddingTop: '50px' }}>
                <label>What time do you want to go?</label>
                <DateTimePicker
                    onChange={(val) => onChange({ instanceName, date: val, maxPlayers })}
                    selected={date}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={5}
                    timeCaption="time"
                    dateFormat="iii MM/dd hh:mm a" />
            </div>
            <div style={{ paddingTop: '20px' }}>
                <label style={{ paddingRight: '10px' }}>How many players? <strong style={{ paddingLeft: '10px' }}>{maxPlayers}</strong></label>
                <Slider discrete displayMarkers value={maxPlayers} min={1} max={10} step={1} onChange={(evt) => onChange({ instanceName, date, maxPlayers: evt.detail.value })}></Slider>
            </div>
            {!saveEnabled && (
                <div style={{ marginTop: '30px' }}><strong>You must enter a name and date before saving.</strong></div>
            )}
            {activity.id && <div style={{ marginTop: '80px' }}>
                <Button onClick={onArchive} raised>Archive Activity To Remove From Active List</Button>
            </div>
            }
        </div>
    )
}

export default MobileDetails