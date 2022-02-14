import React, { useState, useLayoutEffect } from 'react'
import { Typography, Grid, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/PersonRemove'
import DraggablePlayer from './DraggablePlayer'
import { useDrop } from 'react-dnd'

const Role = ({ role, onChange = () => { } }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'player',
        drop: (item) => onChange(role, item.player),
        canDrop: (item) => (!role.player || item.player.destinyId !== role.player.destinyId),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    }))

    let modifiers = 'player-drop-target-unassigned'
    if (isOver) {
        modifiers = 'player-drop-target-hover'
    } else if (role.player) {
        modifiers = 'player-drop-target-assigned'
    }

    return (
        <div ref={drop} style={{ display: 'flex', padding: '3px', alignItems: 'center' }} className={modifiers}>
            <div style={{ minWidth: '240px' }}><Typography variant="h6">{role.name}</Typography></div>
            <div style={{ paddingTop: '0px', display: 'flex', justifyContent: 'space-between', minWidth: '200px', alignItems: 'center' }}>
                <DraggablePlayer player={role.player} />
                {role.player && (
                    <IconButton aria-label="delete" onClick={() => onChange(role, null)}>
                        <DeleteIcon />
                    </IconButton>
                )}
            </div>
        </div>
    )
}

const Stage = ({ stage, onChange = () => { } }) =>
    <div style={{ marginTop: '20px' }} className="raid-stage">
        <div>
            <Typography variant="h4">{stage.title}</Typography>
            <div>
                <Typography variant="subtitle1">{stage.description}</Typography>
            </div>
            <div>
                {stage.roles.map((role) => <Role key={`role-${role.name}`} role={role} onChange={(role, player) => onChange(stage, role, player)} />)}
            </div>
        </div>
    </div>


const RaidAssignments = ({ raid, onChange }) => {
    const [cellSpan, setCellSpan] = useState(6)
    useLayoutEffect(() => {
        const updateSize = () => {
            if (window.innerWidth < 1500) {
                setCellSpan(7)
            }
            else {
                setCellSpan(6)
            }
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, [])

    return (
        <div>
            <Grid container spacing={3}>
                {raid.stages.map((stage, index) =>
                    <Grid item key={`${stage}-${index}`} span={cellSpan} style={{ width: '500px' }}>
                        <Stage key={`${stage}-${index}`} stage={stage} onChange={onChange} />
                    </Grid>)}
            </Grid>
        </div>)
}


export default RaidAssignments