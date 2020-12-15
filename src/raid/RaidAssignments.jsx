import React from 'react'
import { Typography } from '@rmwc/typography'
import { Icon } from '@rmwc/icon'
import { Card } from '@rmwc/card'

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
        <Card>
            <Typography use="headline4">{stage.title}</Typography>
            <Typography use="subtitle1">{stage.description}</Typography>
            <div>
                {stage.roles.map((role) => <Role key={`role-${role.name}`} role={role} />)}
            </div>
        </Card>
    </div>


const RaidAssignments = ({ raid }) =>
    <div>
        {raid.stages.map((stage, index) => <Stage key={`${stage}-${index}`} stage={stage} />)}
    </div>


export default RaidAssignments