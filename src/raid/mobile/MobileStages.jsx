import React from 'react'
import { Typography } from '@rmwc/typography'
import { Grid, GridCell } from '@rmwc/grid'

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

const Stage = ({ stage, onChange = () => { } }) =>
    <div style={{ marginTop: '20px' }} className="raid-stage">
        <div>
            <Typography use="headline4">{stage.title}</Typography>
            <div>
                <Typography use="subtitle1">{stage.description}</Typography>
            </div>
            <div>
                {stage.roles.map((role) => <Role key={`role-${role.name}`} role={role} onChange={(role, player) => onChange(stage, role, player)} />)}
            </div>
        </div>
    </div>


const RaidAssignments = ({ raid, onChange = () => { } }) => {
    return (
        <div>
            <Grid>
                {raid.stages.map((stage, index) =>
                    <GridCell key={`${stage}_${index}`}>
                        <Stage key={`${stage}-${index}`} stage={stage} onChange={onChange} />
                    </GridCell>)}
            </Grid>
        </div>
    )
}


export default RaidAssignments