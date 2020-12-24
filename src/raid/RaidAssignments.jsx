import React from 'react'
import { Typography } from '@rmwc/typography'
import { Grid, GridCell } from '@rmwc/grid'
import DraggablePlayer from './DraggablePlayer'
import { useDrop } from 'react-dnd'

const Role = ({ role, onChange = () => { } }) => {
    const [{ isOver }, drop] = useDrop({
        accept: 'player',
        drop: (item) => onChange(role, item.player),
        canDrop: (item) => (!role.player || item.player.destinyId !== role.player.destinyId),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    })

    let modifiers = 'player-drop-target-unassigned'
    if (isOver) {
        modifiers = 'player-drop-target-hover'
    } else if (role.player) {
        modifiers = 'player-drop-target-assigned'
    }

    return (
        <div ref={drop} style={{ display: 'flex', padding: '3px' }} className={modifiers}>
            <div style={{ minWidth: '300px' }}><Typography use="headline6">{role.name}</Typography></div>
            <div style={{ paddingTop: '5px' }}>
                <DraggablePlayer player={role.player} />
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


const RaidAssignments = ({ raid, onChange }) =>
    <div>
        <Grid>
            {raid.stages.map((stage, index) =>
                <GridCell span={6}>
                    <Stage key={`${stage}-${index}`} stage={stage} onChange={onChange} />
                </GridCell>)}
        </Grid>
    </div>


export default RaidAssignments