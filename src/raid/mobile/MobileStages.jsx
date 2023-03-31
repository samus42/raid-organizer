import React from 'react'
import { Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import MobileEditStageDialog from './MobileEditStage'

const Role = ({ role, onChange = () => { } }) => {
    return (
        <div style={{ display: 'flex', padding: '3px', justifyContent: 'space-between' }}>
            <div>{role.name}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', minWidth: '150px' }}>
                {role.player && (<div style={{ display: 'flex', padding: '0px' }} >
                    <img src={role.player.iconPath} style={{ width: '24px', height: '24px' }} alt="" /><div style={{ paddingLeft: '5px' }}>{role.player.name}</div>
                </div>)}
            </div>
        </div>
    )
}

const Stage = ({ raid, stage, onChange = () => { }, onStrategyChange = () => { } }) =>
    <div style={{ marginTop: '20px', width: '100%' }} className="raid-stage">
        <div>
            <Typography variant="h4">{stage.title}</Typography>
            <div>
                <MobileEditStageDialog raid={raid} stage={stage} onChange={onChange} />
                {stage.strategies && (
                    <FormControl fullWidth size="small" sx={{ marginTop: '10px' }}>
                        <InputLabel id="select-label">Strategies</InputLabel>
                        <Select
                            value={stage.strategy?.title || stage.strategies[0].title}
                            labelId="select-label"
                            label="Strategy"
                            onChange={(evt) => {
                                console.log('val: ', evt.target.value)
                                onStrategyChange(stage, stage.strategies.find((s) => s.title === evt.target.value))
                            }}
                        >
                            {
                                stage.strategies.map((strat) => (
                                    <MenuItem key={strat.title} value={strat.title}>{strat.title}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                )}
            </div>
            <div>
                <Typography variant="subtitle1">{stage.description}</Typography>
            </div>
            <div>
                {stage.roles.map((role) => <Role key={`role-${role.name}`} role={role} />)}
            </div>
        </div>
    </div>


const RaidAssignments = ({ raid, onChange = () => { }, onRandomizeRoles = () => { }, onStrategyChange = () => { } }) => {
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <Button variant="contained" disabled={raid.roster.length < 6} onClick={onRandomizeRoles}>Randomize Roles</Button>
            </div>
            <Grid>
                {raid.stages.map((stage, index) =>
                    <Grid container key={`${stage}_${index}`}>
                        <Stage key={`${stage}-${index}`} raid={raid} stage={stage} onChange={onChange} onStrategyChange={onStrategyChange} />
                    </Grid>)}
            </Grid>
        </div>
    )
}


export default RaidAssignments