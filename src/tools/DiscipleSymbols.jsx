import { useState, useLayoutEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { ImageList, ImageListItem, Button, Typography, ToggleButton, ToggleButtonGroup } from "@mui/material"

const symbolFileNames = [
    'ascendant_plane-alpha.png',
    'black_garden-alpha.png',
    'black_heart-alpha.png',
    'commune-alpha.png',
    'darkness-alpha.png',
    'drink-alpha.png',
    'earth-alpha.png',
    'enter-alpha.png',
    'fleet-alpha.png',
    'gift-alpha.png',
    'grief-alpha.png',
    'guardian-alpha.png',
    'hive-alpha.png',
    'kill-alpha.png',
    'knowledge-alpha.png',
    'light-alpha.png',
    'love-alpha.png',
    'neutral-alpha.png',
    'pyramid-alpha.png',
    'savathun-alpha.png',
    'scorn-alpha.png',
    'stop-alpha.png',
    'tower-alpha.png',
    'traveler-alpha.png',
    'witness-alpha.png',
    'worm-alpha.png',
    'worship-alpha.png',
]

const obeliskOnly = [
    'ascendant_plane-alpha.png',
    'black_garden-alpha.png',
    'black_heart-alpha.png',
    'earth-alpha.png',
    'fleet-alpha.png',
    'guardian-alpha.png',
    'hive-alpha.png',
    'love-alpha.png',
    'savathun-alpha.png',
    'scorn-alpha.png',
    'tower-alpha.png',
    'witness-alpha.png',
    'worm-alpha.png',
]

const roomsOnly = [
    'commune-alpha.png',
    'drink-alpha.png',
    'enter-alpha.png',
    'gift-alpha.png',
    'grief-alpha.png',
    'kill-alpha.png',
    'knowledge-alpha.png',
    'stop-alpha.png',
    'worship-alpha.png',
]
const getFilteredSymbols = (filter) => {
    if (filter === 'obelisk') {
        return obeliskOnly
    }
    if (filter === 'rooms') {
        return roomsOnly
    }
    return symbolFileNames
}
const SymbolItem = ({ fileName, selected, onSelect }) => {
    return <ImageListItem className={selected ? 'gradient-border' : 'unselected-symbol'} onClick={() => onSelect(fileName)}>
        <img src={`/disciple/${fileName}`} alt={fileName} />
    </ImageListItem>
}
const DiscipleSymbols = () => {
    const params = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const [selected, setSelected] = useState([])
    const [filter, setFilter] = useState(params.filter || 'all')
    const [symbolColumns, setSymbolColumns] = useState(7)
    const [isMobile, setIsMobile] = useState(false)
    useLayoutEffect(() => {
        const updateSize = () => {
            setIsMobile(window.innerWidth < 1025)
            let cols = Math.floor(window.innerWidth / 100)
            if (cols < 3) {
                cols = 3
            }
            if (cols > 7) {
                cols = 7
            }
            setSymbolColumns(cols)
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, [])

    const isSelected = (fileName) => selected.includes(fileName)
    const onSymbolSelected = (fileName) => {
        if (isSelected(fileName)) {
            setSelected(selected.filter((fn) => fn !== fileName))
        } else {
            setSelected(selected.concat(fileName))
        }
    }

    const changeFilter = (evt, newValue) => {
        setFilter(newValue)
        const prefix = location.pathname.startsWith('/public') ? '/public' : ''
        navigate(`${prefix}/tools/disciple/${newValue}`, { replace: true })
    }

    return (
        <div className="main-tab-content">
            <div style={{ display: 'flex', justifyContent: "space-between" }}>
                {!isMobile && <Typography variant="h4">Disciple Symbols</Typography>}
                <ToggleButtonGroup value={filter} exclusive onChange={changeFilter}>
                    <ToggleButton value='all'>
                        All
                    </ToggleButton>
                    <ToggleButton value='rooms'>
                        Rooms
                    </ToggleButton>
                    <ToggleButton value='obelisk'>
                        Obelisk
                    </ToggleButton>
                </ToggleButtonGroup>
                <Button variant="contained" onClick={() => setSelected([])}>Reset</Button>
            </div>
            <ImageList cols={symbolColumns} >
                {getFilteredSymbols(filter).map((fileName) =>
                    <SymbolItem
                        key={fileName}
                        fileName={fileName}
                        selected={isSelected(fileName)}
                        onSelect={onSymbolSelected}
                    />
                )}
            </ImageList>
        </div >
    )
}


export default DiscipleSymbols
