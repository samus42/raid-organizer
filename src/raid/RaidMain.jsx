import React, { useState, useEffect, useLayoutEffect } from 'react'
import RaidDetails from './RaidDetails'
import MobileMain from './mobile/MobileMain'
import { useNavigate, useParams } from 'react-router-dom'
import { newRaidByKey, isRaidKey } from './templates'
import { loadRaid, saveRaid, archiveRaid } from '../api/clan'
import { Snackbar, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import ErrorDialog from '../ErrorDialog'
import isEmpty from 'lodash.isempty'
import differenceBy from 'lodash.differenceby'
import { getCurrentUserInfo } from '../user/currentUser'

const RaidMain = () => {
    const [screenLayout, setScreenLayout] = useState('desktop')
    const navigate = useNavigate()
    const [raid, setRaid] = useState()
    const [instanceName, setInstanceName] = useState('')
    const [date, setDate] = useState(new Date())
    const [currentRoster, setCurrentRoster] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [saveEnabled, setSaveEnabled] = useState(false)
    const [saveMessage, setSaveMessage] = useState(null)
    const [error, setError] = useState(null)
    const [reloadFlag, setReloadFlag] = useState(1)
    const { raidKey } = useParams()

    useLayoutEffect(() => {
        const updateSize = () => {
            if (window.innerWidth < 1025) {
                setScreenLayout('mobile')
            }
            else {
                setScreenLayout('desktop')
            }
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, [])

    useEffect(() => {
        const getRaid = async () => {
            const loaded = await loadRaid(raidKey)
            setRaid(loaded)
            setInstanceName(loaded.instanceName)
            setDate(new Date(loaded.date))
            setCurrentRoster(loaded.roster)
            setIsLoading(false)
            setSaveEnabled(true)
        }
        setIsLoading(true)
        if (isRaidKey([raidKey])) {
            const newRaid = newRaidByKey(raidKey)
            setIsLoading(false)
            setSaveEnabled(false)
            const currentUser = getCurrentUserInfo()
            if (currentUser) {
                setCurrentRoster([currentUser])
                newRaid.roster = [currentUser]
            }
            setRaid(newRaid)
        } else {
            getRaid()
        }
    }, [raidKey, reloadFlag])

    const onDetailsChange = (details) => {
        setInstanceName(details.instanceName)
        setDate(details.date)
        setSaveEnabled(!isEmpty(details.instanceName.trim()) && details.date)
    }

    const performSave = async (raidData) => {
        if (!saveEnabled) {
            return
        }
        try {
            setSaveEnabled(false)
            const isNew = !raid.id
            const updated = await saveRaid(raidData)
            setRaid(updated)
            if (isNew) {
                navigate(`/raid/${updated.id}`)
                setSaveMessage('Raid saved! You can now share the URL in the browser with others.')
            } else {
                setSaveMessage('Raid updates saved!')
            }
        } catch (err) {
            console.error(err)
            setError(err)
        }
        setSaveEnabled(true)
    }
    const onSave = async () => {
        await performSave({ ...raid, roster: currentRoster, instanceName: instanceName.trim(), date: date.toISOString() })
    }

    const onArchive = async () => {
        await archiveRaid(raid)
        setRaid({ ...raid, active: false })
    }

    const onRosterChange = async (newRoster, saveData = false) => {
        const removed = differenceBy(currentRoster, newRoster, 'destinyId')
        const newRaid = JSON.parse(JSON.stringify(raid))
        if (removed.length > 0) {
            const removedIds = removed.map(({ destinyId }) => destinyId)
            newRaid.stages.forEach((stage) => {
                stage.roles.forEach((role) => {
                    if (role.player && removedIds.includes(role.player.destinyId)) {
                        role.player = null
                    }
                })
            })
            setRaid(newRaid)
        }
        setCurrentRoster(newRoster)
        if (saveData) {
            await performSave({ ...newRaid, roster: newRoster, instanceName, date })
        }
    }

    const onErrorDialogClose = (action) => {
        if (action === 'reload') {
            //refresh page
            window.location.reload()
            setReloadFlag(reloadFlag + 1)
        }
        setError(null)
    }

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    const ViewComponent = screenLayout === 'mobile' ? MobileMain : RaidDetails
    return (
        <div>
            <ErrorDialog error={error} onClose={onErrorDialogClose} />
            <ViewComponent
                roster={currentRoster}
                date={date}
                instanceName={instanceName}
                raid={raid}
                saveEnabled={saveEnabled}
                onChangeRaid={async (updated, doSave) => {
                    setRaid(updated)
                    if (doSave) {
                        await performSave({ ...updated, roster: currentRoster, instanceName: instanceName.trim(), date })
                    }
                }}
                onSave={onSave}
                onArchive={onArchive}
                onDetailsChange={onDetailsChange}
                onRosterChange={onRosterChange}
            />
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                open={!!saveMessage}
                onClose={evt => setSaveMessage(null)}
                message={saveMessage}
                autoHideDuration={6000}
                action={
                    <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={evt => setSaveMessage(null)}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                }
            />
        </div>
    )
}

export default RaidMain