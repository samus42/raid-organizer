import { useState, useLayoutEffect } from 'react'
import { Button, Typography } from "@mui/material"
import { getFilteredSymbols, SymbolFilters } from './symbolList'
import SymbolGrid from '../SymbolGrid'
import PuzzleSolution from './ChestPuzzleSolution'

const Panels = {
    SelectSymbols: 'selectSymbols',
    DisplaySolution: 'displaySolution'
}

const SelectSymbols = ({ onSubmit }) => {
    const [selected, setSelected] = useState([])
    const [symbolColumns, setSymbolColumns] = useState(7)

    useLayoutEffect(() => {
        const updateSize = () => {
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

    return (
        <div>
            <p>
                Go underneath the platform that holds the gate after dunking all the balls to find the symbols you need to light up.
            </p>
            <div style={{ textAlign: 'center' }}>
                <Button disabled={selected.length !== 3} variant="contained" onClick={() => onSubmit(selected)}>View Solution</Button>
            </div>
            <SymbolGrid symbols={getFilteredSymbols(SymbolFilters.TakenKingPuzzle)} imagePathPrefix="takenking" selected={selected} cols={symbolColumns} onChange={(newVals) => setSelected(newVals)} />
        </div>
    )
}

const TakenKingChestPuzzle = () => {
    const [currentPanel, setCurrentPanel] = useState(Panels.SelectSymbols)
    const [selected, setSelected] = useState([])
    const onSymbolsSelected = (vals) => {
        setSelected(vals)
        setCurrentPanel(Panels.DisplaySolution)
    }
    const onReset = () => {
        setSelected([])
        setCurrentPanel(Panels.SelectSymbols)
    }

    return (
        <div className="main-tab-content">
            <Typography variant="h4">Disciple Puzzle</Typography>
            {currentPanel === Panels.SelectSymbols && <SelectSymbols onSubmit={onSymbolsSelected} />}
            {currentPanel === Panels.DisplaySolution && <PuzzleSolution selected={selected} onReset={onReset} />}
        </div>
    )
}

export default TakenKingChestPuzzle