import { useState, useEffect } from 'react'
import { ImageList, ImageListItem } from "@mui/material"
import { shouldComponentUpdate } from 'react-window'

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

const selectedStyle = { border: '5px solid darkgoldenrod' }
const unselectedStyle = {}
const SymbolItem = ({ fileName, selected, onSelect }) => {
    return <ImageListItem sx={selected ? selectedStyle : unselectedStyle} onClick={() => onSelect(fileName)}>
        <img src={`/disciple/${fileName}`} alt={fileName} />
    </ImageListItem>
}
const DiscipleSymbols = () => {
    const [selected, setSelected] = useState([])
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
            <ImageList cols={7}>
                {symbolFileNames.map((fileName) =>
                    <SymbolItem
                        key={fileName}
                        fileName={fileName}
                        selected={isSelected(fileName)}
                        onSelect={onSymbolSelected}
                    />
                )}
            </ImageList>
        </div>
    )
}


export default DiscipleSymbols
