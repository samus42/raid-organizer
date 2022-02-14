import React, { useState, useEffect, useLayoutEffect } from 'react'
import DesktopMain from './desktop/DesktopMain'
import MobileMain from './mobile/MobileMain'
import { useNavigate, useParams } from 'react-router-dom'
import { newActivityByKey, isActivityKey } from './templates'
import { loadActivity, saveActivity, archiveActivity } from '../api/clan'
import { Snackbar, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import ErrorDialog from '../ErrorDialog'
import isEmpty from 'lodash.isempty'

const ActivityMain = () => {
    const [screenLayout, setScreenLayout] = useState('desktop')
    const navigate = useNavigate()
    const [activity, setActivity] = useState()
    const [instanceName, setInstanceName] = useState('')
    const [maxPlayers, setMaxPlayers] = useState(6)
    const [date, setDate] = useState(new Date())
    const [currentRoster, setCurrentRoster] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [saveEnabled, setSaveEnabled] = useState(false)
    const [saveMessage, setSaveMessage] = useState(null)
    const [error, setError] = useState(null)
    const [reloadFlag, setReloadFlag] = useState(1)
    const { activityKey } = useParams()
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
        const getActivity = async () => {
            try {
                const loaded = await loadActivity(activityKey)
                setActivity(loaded)
                setInstanceName(loaded.instanceName)
                setDate(new Date(loaded.date))
                setCurrentRoster(loaded.players)
                setMaxPlayers(loaded.maxPlayers)
                setIsLoading(false)
                setSaveEnabled(true)
            } catch (err) {
                console.error(err)
                setError(err)
            }
        }
        setIsLoading(true)
        if (isActivityKey([activityKey])) {
            setActivity(newActivityByKey(activityKey))
            setIsLoading(false)
            setSaveEnabled(false)
        } else {
            getActivity()
        }
    }, [activityKey, reloadFlag])

    const onDetailsChange = (details) => {
        setInstanceName(details.instanceName)
        setDate(details.date)
        setMaxPlayers(details.maxPlayers)
        setSaveEnabled(!isEmpty(details.instanceName.trim()) && details.date)
    }

    const performSave = async (activityData) => {
        try {
            const isNew = !activity.id
            const updated = await saveActivity(activityData)
            setActivity(updated)
            if (isNew) {
                navigate(`/activity/${updated.id}`)
                setSaveMessage('Activity saved! You can now share the URL in the browser with others.')
            } else {
                setSaveMessage('Activity updates saved!')
            }
        } catch (err) {
            console.error(err)
            setError(err)
        }
    }
    const onSave = async () => {
        await performSave({ ...activity, players: currentRoster, instanceName, date, maxPlayers })
    }

    const onArchive = async () => {
        await archiveActivity(activity)
        setActivity({ ...activity, active: false })
    }

    const onRosterChange = async (newRoster, saveData = false) => {
        setCurrentRoster(newRoster)
        if (saveEnabled) {
            await performSave({ ...activity, players: newRoster, instanceName, date })
        }
    }

    const onErrorDialogClose = (action) => {
        console.log('onErrorDialogClose: ', action)
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

    const ViewComponent = screenLayout === 'mobile' ? MobileMain : DesktopMain
    return (
        <div>
            <ErrorDialog error={error} onClose={onErrorDialogClose} />
            <ViewComponent
                roster={currentRoster}
                date={date}
                instanceName={instanceName}
                maxPlayers={maxPlayers}
                activity={activity}
                saveEnabled={saveEnabled}
                onChangeActivity={(updated) => setActivity(updated)}
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

export default ActivityMain