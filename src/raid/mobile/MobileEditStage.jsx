import React, { useState, useEffect } from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import { changeStagePosition } from '../changePosition'
const clone = (obj) => JSON.parse(JSON.stringify(obj))

const Role = ({ role, raid, onChange = () => { } }) => {
    return (
        <div style={{ display: 'flex', paddingTop: '10px', paddingBottom: '10px', justifyContent: 'space-between' }}>
            <div>{role.name}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', minWidth: '150px' }}>
                <select onChange={(evt) => onChange(role, evt.target.value)} style={{ fontSize: '18px' }} value={role.player ? role.player.destinyId : -1}>
                    {[<option key={-1} value={-1}>Empty</option>].concat(raid.roster.map((player) => (<option key={player.destinyId} value={player.destinyId}>{player.name}</option>)))}
                </select>
            </div>
        </div>
    )
}

const MobileEditStageDialog = ({ stage, raid, onChange = () => { } }) => {
    const [open, setOpen] = useState(false);
    const [workingStage, setWorkingStage] = useState(stage)
    useEffect(() => {
        if (open) {
            setWorkingStage(stage)
        }
    }, [open, stage])

    const onRolePlayerChange = (role, playerId) => {
        const player = raid.roster.find(({ destinyId }) => playerId === destinyId)
        const newStage = changeStagePosition(workingStage, role, player)
        setWorkingStage(newStage)
    }

    const onSave = () => {
        const stageIndex = raid.stages.findIndex((s) => s.title === stage.title)
        const newRaid = clone(raid)
        newRaid.stages[stageIndex] = workingStage
        onChange(newRaid)
        setOpen(false)
    }
    return (
        <>
            <Dialog
                fullScreen
                open={open}
                onClose={() =>
                    setOpen(false)
                }
            >
                <DialogTitle>{stage.title}</DialogTitle>
                <DialogContent>
                    <div>
                        {workingStage.roles.map((role) => <Role key={`role-${role.name}`} raid={raid} role={role} onChange={onRolePlayerChange} />)}
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={() => setOpen(false)}>Cancel</Button>
                    <Button variant="contained" onClick={onSave}>Save</Button>
                </DialogActions>
            </Dialog>
            <Button variant="contained" onClick={() => setOpen(true)}>Edit Roles</Button>
        </>
    )
}

export default MobileEditStageDialog