import React, { useState, useEffect, useLayoutEffect } from 'react'
import DesktopMain from './desktop/DesktopMain'
import MobileMain from './mobile/MobileMain'
import { useHistory } from 'react-router-dom'
import { newActivityByKey, isActivityKey } from './templates'
import { loadActivity, saveActivity, archiveActivity } from '../api/clan'
import { Snackbar, SnackbarAction } from '@rmwc/snackbar'
import ErrorDialog from '../ErrorDialog'
import isEmpty from 'lodash.isempty'

const ActivityMain = ({ match }) => {
    const [screenLayout, setScreenLayout] = useState('desktop')
    const history = useHistory()
    const [activity, setActivity] = useState()
    const [instanceName, setInstanceName] = useState('')
    const [date, setDate] = useState(new Date())
    const [currentRoster, setCurrentRoster] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [saveEnabled, setSaveEnabled] = useState(false)
    const [saveMessage, setSaveMessage] = useState(null)
    const [error, setError] = useState(null)
    const [reloadFlag, setReloadFlag] = useState(1)
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
            const loaded = await loadActivity(match.params.activityKey)
            setActivity(loaded)
            setInstanceName(loaded.instanceName)
            setDate(new Date(loaded.date))
            setCurrentRoster(loaded.roster)
            setIsLoading(false)
            setSaveEnabled(true)
        }
        setIsLoading(true)
        console.log('activityKey: ', match.params.raidKey)
        if (isActivityKey([match.params.activityKey])) {
            setActivity(newActivityByKey(match.params.activityKey))
            setIsLoading(false)
            setSaveEnabled(false)
        } else {
            getActivity()
        }
    }, [match, reloadFlag])

    const onDetailsChange = (details) => {
        setInstanceName(details.instanceName.trim())
        setDate(details.date)
        setSaveEnabled(!isEmpty(details.instanceName.trim()) && details.date)
    }

    const performSave = async (activityData) => {
        const isNew = !activity.id
        const updated = await saveActivity(activityData)
        setActivity(updated)
        if (isNew) {
            history.push(`/activity/${updated.id}`)
            setSaveMessage('Activity saved! You can now share the URL in the browser with others.')
        } else {
            setSaveMessage('Activity updates saved!')
        }
    }
    const onSave = async () => {
        await performSave({ ...activity, roster: currentRoster, instanceName, date })
    }

    const onArchive = async () => {
        await archiveActivity(activity)
        setActivity({ ...activity, active: false })
    }

    const onRosterChange = async (newRoster, saveData = false) => {
        /*
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
        */
    }

    const onErrorDialogClose = (action) => {
        if (action === 'reload') {
            //refresh page
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
                activity={activity}
                saveEnabled={saveEnabled}
                onChangeActivity={(updated) => setActivity(updated)}
                onSave={onSave}
                onArchive={onArchive}
                onDetailsChange={onDetailsChange}
                onRosterChange={onRosterChange}
            />
            <Snackbar
                open={saveMessage}
                onClose={evt => setSaveMessage(null)}
                message={saveMessage}
                dismissesOnAction
                action={
                    <SnackbarAction
                        label="Dismiss"
                    />
                }
            />
        </div>
    )
}

export default ActivityMain