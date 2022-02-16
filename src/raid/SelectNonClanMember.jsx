import { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, CircularProgress } from '@mui/material'
import isEmpty from 'lodash.isempty'
import { searchUsers } from '../api/destiny'

const SelectNonClanMember = ({ fullScreen = false, onSelected = () => { }, disabled = false }) => {
    const [showDialog, setShowDialog] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [foundUser, setFoundUser] = useState(null)

    const findUsers = async () => {
        try {
            setLoading(true)
            const users = await searchUsers(searchText)
            if (isEmpty(users)) {
                setFoundUser(null)
            } else {
                setFoundUser(users[0])
            }
        } catch (err) {
            console.error(err)
            setError(err)
        }
        setLoading(false)
    }
    const onAccept = () => {
        onSelected(foundUser)
        setShowDialog(false)
    }
    return (
        <>
            <Button variant="contained" disabled={disabled} onClick={() => setShowDialog(true)}>Add Non-Clan Member</Button>
            <Dialog open={showDialog} fullScreen={fullScreen}>
                <DialogTitle>Select Non-Clan Member</DialogTitle>
                <DialogContent>
                    <div>
                        So let's get this straight, Bungie was bought for <strong>3.6 billion</strong> dollars.
                        You'd think a company worth that much would be on the ball, right?
                        You'd think they would have, say, a user search API that allowed you to enter a partial name, right?
                        Well, joke's on you Sony! What does their search API do? Well it allows you to find the user case-insensitively.
                        So there's that.
                    </div>
                    <div style={{ paddingTop: '10px' }}>
                        Anyway, you have to type the exact name in to find someone.
                    </div>
                    <div style={{ paddingTop: '20px', display: 'flex', alignItems: 'center' }}>
                        <TextField label="Enter your search" onChange={(evt) => setSearchText(evt.target.value)} value={searchText} />
                        <div style={{ paddingLeft: '20px' }}>
                            <Button variant="contained" disabled={isEmpty(searchText)} onClick={findUsers}>Search</Button>
                        </div>
                    </div>
                    <div style={{ paddingTop: '10px' }}>
                        {loading && <CircularProgress />}
                        {!loading && foundUser && <div>User exists! Hit Accept to use them.</div>}
                        {!loading && !foundUser && <div>No user found</div>}
                        {error && <div>An error occurred, tell Samus immediately!</div>}
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={() => setShowDialog(false)}>Cancel</Button>
                    <Button variant="contained" onClick={onAccept} disabled={isEmpty(foundUser)}>Accept</Button>
                </DialogActions>
            </Dialog >
        </>
    )
}

export default SelectNonClanMember