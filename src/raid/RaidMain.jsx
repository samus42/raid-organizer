import React, { useState, useEffect, useLayoutEffect } from 'react'
import RaidDetails from './RaidDetails'
import MobileMain from './mobile/MobileMain'
import { useHistory } from 'react-router-dom'
import { newRaidByKey, isRaidKey } from './templates'
import { loadRaid, saveRaid, archiveRaid } from '../api/clan'
import { Snackbar, SnackbarAction } from '@rmwc/snackbar'
import isEmpty from 'lodash.isempty'

const RaidMain = ({ match }) => {
    const [screenLayout, setScreenLayout] = useState('desktop')
    const history = useHistory()
    const [raid, setRaid] = useState()
    const [instanceName, setInstanceName] = useState('')
    const [date, setDate] = useState(new Date())
    const [currentRoster, setCurrentRoster] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [saveEnabled, setSaveEnabled] = useState(false)
    const [saveMessage, setSaveMessage] = useState(null)

    useLayoutEffect(() => {
        const updateSize = () => {
            console.log(window.innerWidth)
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
            const loaded = await loadRaid(match.params.raidKey)
            setRaid(loaded)
            setInstanceName(loaded.instanceName)
            setDate(new Date(loaded.date))
            setCurrentRoster(loaded.roster)
            setIsLoading(false)
            setSaveEnabled(true)
        }
        setIsLoading(true)
        console.log('raidKey: ', match.params.raidKey)
        if (isRaidKey([match.params.raidKey])) {
            setRaid(newRaidByKey(match.params.raidKey))
            setIsLoading(false)
            setSaveEnabled(false)
        } else {
            getRaid()
        }
    }, [match])

    const onDetailsChange = (details) => {
        setInstanceName(details.instanceName.trim())
        setDate(details.date)
        setSaveEnabled(!isEmpty(details.instanceName.trim()) && details.date)
    }

    const performSave = async (raidData) => {
        const isNew = !raid.id
        const updated = await saveRaid(raidData)
        setRaid(updated)
        if (isNew) {
            history.push(`/raid/${updated.id}`)
            setSaveMessage('Raid saved! You can now share the URL in the browser with others.')
        } else {
            setSaveMessage('Raid updates saved!')
        }
    }
    const onSave = async () => {
        await performSave({ ...raid, roster: currentRoster, instanceName, date })
    }

    const onArchive = async () => {
        await archiveRaid(raid)
        setRaid({ ...raid, active: false })
    }

    const onRosterChange = async (newRoster, saveData = false) => {
        setCurrentRoster(newRoster)
        if (saveData) {
            await performSave({ ...raid, roster: newRoster, instanceName, date })
        }
    }

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    const ViewComponent = screenLayout === 'mobile' ? MobileMain : RaidDetails
    return (
        <div>
            <ViewComponent
                roster={currentRoster}
                date={date}
                instanceName={instanceName}
                raid={raid}
                saveEnabled={saveEnabled}
                onChangeRaid={(updated) => setRaid(updated)}
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

export default RaidMain