import { Grid, Button, Typography, TextField, Slider } from '@mui/material'
import DateTimePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import DesktopRoster from './DesktopRoster'

const DesktopMain = ({ roster, date, instanceName, maxPlayers, activity, saveEnabled, onSave, onArchive, onDetailsChange, onRosterChange }) => {
    return (
        <div style={{ paddingLeft: '20px' }}>
            <div style={{ paddingLeft: '0px', paddingTop: '20px', paddingBottom: '10px' }}>
                <Typography variant="h4">{activity.activityName}</Typography>
            </div>
            {!activity.active && <h2 style={{ paddingLeft: '20px' }}>This activity is longer active!</h2>}
            <Grid container spacing={4}>
                <Grid item xs={4}>
                    <div>
                        <Typography variant="h6">Details</Typography>
                    </div>
                    <div>
                        <TextField fullWidth label="Create a name for this activity!" value={instanceName} onChange={(evt) => onDetailsChange({ instanceName: evt.target.value, date, maxPlayers })} />
                    </div>
                    <div style={{ paddingTop: '10px' }}>
                        <label style={{ paddingRight: '10px' }}>What time do you want to go?</label>
                        <DateTimePicker
                            onChange={(val) => onDetailsChange({ instanceName, date: val, maxPlayers })}
                            selected={date}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={5}
                            timeCaption="time"
                            dateFormat="iii MM/dd hh:mm a" />
                    </div>
                    <div style={{ paddingTop: '20px' }}>
                        <label style={{ paddingRight: '10px' }}>How many players? <strong style={{ paddingLeft: '10px' }}>{maxPlayers}</strong></label>
                        <Slider value={maxPlayers} min={1} max={10} step={1} marks onChange={(evt, newValue) => onDetailsChange({ instanceName, date, maxPlayers: newValue })}></Slider>
                    </div>
                    <div style={{ paddingTop: '30px' }}>
                        <Button variant="contained" disabled={!saveEnabled} onClick={onSave}>Save Changes</Button>
                    </div>
                    {activity.id && <div style={{ marginTop: '50px' }}>
                        <Button onClick={onArchive} variant="contained">Archive Activity To Remove From Active List</Button>
                    </div>
                    }
                </Grid>
                <Grid item xs={8}>
                    <div>
                        <Typography variant="h6">Roster</Typography>
                    </div>
                    <DesktopRoster roster={roster} onRosterChange={onRosterChange} activity={activity} maxPlayers={maxPlayers} />
                </Grid>
            </Grid>
        </div>
    )
}

export default DesktopMain
