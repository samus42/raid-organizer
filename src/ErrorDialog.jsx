import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material'

const VersionSyncDialog = ({ onClose }) => (
    <>
        <DialogTitle>Error - Info out of date!</DialogTitle>
        <DialogContent>
            <div>We'd love to save your data, but it turns out some bastard saved while you were looking at this page. Or you fell asleep with this page open.  Still, they should have waited.</div>
            <div style={{ paddingTop: '20px' }}>Go ahead and use the reload action and then try to make your changes again. Or if you don't remember what you just did, hit the cancel button, take a good look, then refresh the page.</div>
        </DialogContent>
        <DialogActions>
            <Button variant="contained" onClick={() => onClose('close')}>Cancel</Button>
            <Button variant="contained" onClick={() => onClose('reload')}>Reload</Button>
        </DialogActions>
    </>
)

const UnknownErrorDialog = ({ error, onClose }) => (
    <>
        <DialogTitle>Oops! There was an error!</DialogTitle>
        <DialogContent>
            <div>Something went wrong, like really wrong. Are you still alive? Phew, ok it wasn't THAT error then.</div>
            <div style={{ paddingTop: '20px' }}>You did something Samus didn't plan for, or he screwed up. Big time. You should tell him. Be smug about it when you do.</div>
        </DialogContent>
        <DialogActions>
            <Button variant="contained" onClick={() => onClose('close')}>Cancel</Button>
        </DialogActions>
    </>
)

const ErrorDialog = ({ error, onClose }) => {
    const Content = error && error.message.includes('mismatch') ? VersionSyncDialog : UnknownErrorDialog
    return (
        <Dialog open={!!error}>
            <Content error={error} onClose={onClose} />
        </Dialog >
    )
}

export default ErrorDialog