import React from 'react'
import { Typography, Grid, Button } from '@mui/material'
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

const Stage = ({ raid, stage, onChange = () => { } }) =>
    <div style={{ marginTop: '20px', width: '100%' }} className="raid-stage">
        <div>
            <Typography variant="h4">{stage.title}</Typography>
            <div>
                <MobileEditStageDialog raid={raid} stage={stage} onChange={onChange} />
            </div>
            <div>
                <Typography variant="subtitle1">{stage.description}</Typography>
            </div>
            <div>
                {stage.roles.map((role) => <Role key={`role-${role.name}`} role={role} />)}
            </div>
        </div>
    </div>


const RaidAssignments = ({ raid, onChange = () => { }, onRandomizeRoles = () => { } }) => {
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <Button variant="contained" disabled={raid.roster.length < 6} onClick={onRandomizeRoles}>Randomize Roles</Button>
            </div>
            <Grid>
                {raid.stages.map((stage, index) =>
                    <Grid container key={`${stage}_${index}`}>
                        <Stage key={`${stage}-${index}`} raid={raid} stage={stage} onChange={onChange} />
                    </Grid>)}
            </Grid>
        </div>
    )
}


export default RaidAssignments