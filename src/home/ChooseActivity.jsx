import { useLayoutEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Grid, Card, CardActionArea, Typography, Button } from '@mui/material'

const createActivity = (title, imagePath, target) => ({ title, imagePath, target })
const activities = [
    createActivity("Vow Of The Disciple", "/activities/disciple.png", '/raid/disciple'),
    createActivity("Vault Of Glass", "/activities/vaultofglass.png", '/raid/vault'),
    createActivity("Deep Stone Crypt", "/activities/deepstonecrypt.png", '/raid/crypt'),
    createActivity("Garden Of Salvation", "/activities/garden.png", '/raid/garden'),
    createActivity("Last Wish", "/activities/lastwish.png", '/raid/wish'),
    createActivity("Among Us", "/activities/amongus.png", '/activity/amongus'),
    createActivity("Custom Activity", "/chaos-aqua.png", '/activity/custom'),
    createActivity(`Crota's End`, "/activities/crota.png", '/raid/crota'),
    createActivity("Taken King", "/activities/takenking.png", '/raid/ttk'),
    createActivity("Wrath Of The Machine", "/activities/wrathofthemachine.png", '/raid/wrath'),
]
const ActivityCard = ({ imagePath, title, screenLayout, target }) => {
    const navigate = useNavigate()
    const titleSize = screenLayout === 'desktop' ? 'h5' : 'subtitle1'
    const imageSize = screenLayout === 'desktop' ? '120px' : '80px'
    const cardWidth = screenLayout === 'desktop' ? '250px' : '170px'
    return (
        <Grid item sx={6} md={3}>
            <Card sx={{ maxHeight: '200px', width: cardWidth }}>
                <CardActionArea onClick={() => navigate(target)}>
                    <div style={{ padding: '2px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={imagePath} style={{ width: imageSize, height: imageSize }} alt={title} />

                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography variant={titleSize}>{title}</Typography>
                        </div>
                    </div>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

const ChooseActivity = ({ onClose }) => {
    const [screenLayout, setScreenLayout] = useState('desktop')
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

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <Button onClick={onClose} variant="contained">Go Back</Button>
            </div>
            <Grid container spacing={3}>
                {activities.map(({ title, imagePath, target }) =>
                    (<ActivityCard key={title} title={title} imagePath={imagePath} target={target} screenLayout={screenLayout} />)
                )}
            </Grid>
        </div>
    )
}

export default ChooseActivity