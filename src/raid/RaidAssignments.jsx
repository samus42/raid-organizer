import React from 'react'
import { Typography } from '@rmwc/typography'
import { Card } from '@rmwc/card'
import { Grid, GridCell } from '@rmwc/grid'

const Role = ({ role }) => (
    <div style={{ display: 'flex' }}>
        <div style={{ minWidth: '300px' }}><Typography use="headline6">{role.name}</Typography></div>
        <div style={{ display: 'flex' }}>
            <img src={role.player.iconPath} style={{ width: '24px', height: '24px' }} alt="" /><div style={{ paddingLeft: '5px' }}>{role.player.name}</div>
        </div>
    </div>
)
const Stage = ({ stage }) =>
    <div style={{ marginTop: '20px' }}>
        <div>
            <Typography use="headline4">{stage.title}</Typography>
            <div>
                <Typography use="subtitle1">{stage.description}</Typography>
            </div>
            <div>
                {stage.roles.map((role) => <Role key={`role-${role.name}`} role={role} />)}
            </div>
        </div>
    </div>


const RaidAssignments = ({ raid }) =>
    <div>
        <Grid>
            {raid.stages.map((stage, index) =>
                <GridCell span={6}>
                    <Stage key={`${stage}-${index}`} stage={stage} />
                </GridCell>)}
        </Grid>
    </div>


export default RaidAssignments