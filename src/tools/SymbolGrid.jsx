import { ImageList, ImageListItem } from "@mui/material"

const SymbolItem = ({ fileName, imagePathPrefix, selected, onSelect }) => {
    return <ImageListItem className={selected ? 'gradient-border' : 'unselected-symbol'} onClick={() => onSelect(fileName)}>
        <img src={`/${imagePathPrefix}/${fileName}`} alt={fileName} />
    </ImageListItem>
}

const SymbolGrid = ({ cols, symbols = [], imagePathPrefix, selected, onChange }) => {
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
            {symbols.map((fileName) =>
                <SymbolItem
                    key={fileName}
                    fileName={fileName}
                    selected={isSelected(fileName)}
                    onSelect={onSymbolSelected}
                    imagePathPrefix={imagePathPrefix}
                />
            )}
        </ImageList>
    )
}

export default SymbolGrid