import { Grid, GridCell } from '@rmwc/grid'
import DateTimePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { Button } from '@rmwc/button'
import { Typography } from '@rmwc/typography'
import { TextField } from '@rmwc/textfield'

const DesktopMain = ({ roster, date, instanceName, activity, saveEnabled, onSave, onArchive, onDetailsChange, onRosterChange }) => {
    return (
        <div>
            <div style={{ paddingLeft: '20px' }}>
                <Typography use="headline4">Among Us</Typography>
            </div>
            <Grid>
                <GridCell span={6}>
                    <div>
                        <TextField style={{ width: '100%' }} label="Create a name for this run!" value={instanceName} onChange={(evt) => onDetailsChange({ instanceName: evt.target.value, date })} />
                    </div>
                    <div style={{ paddingTop: '10px' }}>
                        <label style={{ paddingRight: '10px' }}>What time do you want to go?</label>
                        <DateTimePicker
                            onChange={(val) => onDetailsChange({ instanceName, date: val })}
                            selected={date}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={5}
                            timeCaption="time"
                            dateFormat="iii MM/dd hh:mm a" />
                    </div>
                </GridCell>
                <GridCell span={6}>

                </GridCell>
            </Grid>
        </div>
    )
}

export default DesktopMain
