import { ImageList, ImageListItem } from "@mui/material"
import { getFilteredSymbols } from './symbolList'

const SymbolItem = ({ fileName, selected, onSelect }) => {
    return <ImageListItem className={selected ? 'gradient-border' : 'unselected-symbol'} onClick={() => onSelect(fileName)}>
        <img src={`/disciple/${fileName}`} alt={fileName} />
    </ImageListItem>
}

const SymbolGrid = ({ cols, filter, selected, onChange }) => {
    const isSelected = (fileName) => selected.includes(fileName)

    const onSymbolSelected = (fileName) => {
        if (isSelected(fileName)) {
            onChange(selected.filter((fn) => fn !== fileName))
        } else {
            onChange(selected.concat(fileName))
        }
    }

    return (
        <ImageList cols={cols} >
            {getFilteredSymbols(filter).map((fileName) =>
                <SymbolItem
                    key={fileName}
                    fileName={fileName}
                    selected={isSelected(fileName)}
                    onSelect={onSymbolSelected}
                />
            )}
        </ImageList>
    )
}

export default SymbolGrid