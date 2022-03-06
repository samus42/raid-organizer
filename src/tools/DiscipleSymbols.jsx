import { useState, useLayoutEffect } from 'react'
import { ImageList, ImageListItem, Button, Typography, ToggleButton, ToggleButtonGroup } from "@mui/material"
import { filter } from 'lodash'

const symbolFileNames = [
    'ascendant_plane-raw.png',
    'black_garden-raw.png',
    'black_heart-raw.png',
    'commune-raw.png',
    'darkness-raw.png',
    'drink-raw.png',
    'earth-raw.png',
    'enter-raw.png',
    'fleet-raw.png',
    'gift-raw.png',
    'grief-raw.png',
    'guardian-raw.png',
    'hive-raw.png',
    'kill-raw.png',
    'knowledge-raw.png',
    'light-raw.png',
    'neutral-raw.png',
    'pyramid-raw.png',
    'savathun-raw.png',
    'scorn-raw.png',
    'stop-raw.png',
    'traveler-raw.png',
    'witness-raw.png',
    'worm-raw.png',
    'worship-raw.png',
]

const obeliskOnly = [
    'ascendant_plane-raw.png',
    'black_garden-raw.png',
    'black_heart-raw.png',
    'earth-raw.png',
    'fleet-raw.png',
    'guardian-raw.png',
    'hive-raw.png',
    'savathun-raw.png',
    'scorn-raw.png',
    'witness-raw.png',
    'worm-raw.png',
]

const roomsOnly = [
    'commune-raw.png',
    'drink-raw.png',
    'enter-raw.png',
    'gift-raw.png',
    'grief-raw.png',
    'kill-raw.png',
    'knowledge-raw.png',
    'stop-raw.png',
    'worship-raw.png',
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
    const [selected, setSelected] = useState([])
    const [filter, setFilter] = useState('all')
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


    return (
        <div className="main-tab-content">
            <div style={{ display: 'flex', justifyContent: "space-between" }}>
                {!isMobile && <Typography variant="h4">Disciple Symbols</Typography>}
                <ToggleButtonGroup value={filter} exclusive onChange={(evt, newValue) => setFilter(newValue)}>
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
