import React from 'react'
import { Button } from '@mui/material'

const symbol1 = {
    symbol: '1.png',
    roomNumber: 1,
    details: `Seen from the first lectern thing on the swinging pendulum jump puzzle. Turn around once you get to the first swinging lectern and you'll see it on the wall.`
}

const symbol2 = {
    symbol: '2.png',
    roomNumber: 2,
    details: 'Above the door leading to the 1st secret chest (in the tomb ship jump puzzle)'
}

const symbol3 = {
    symbol: '3.png',
    roomNumber: 3,
    details: 'In the left room of the Totems encounter. On the wall above the balcony.'
}

const symbol4 = {
    symbol: '4.png',
    roomNumber: 4,
    details: 'Warpriest Encounter. On the top right ledge (closest to the door you walk in from) on a wall.'
}

const symbol5 = {
    symbol: '5.png',
    roomNumber: 5,
    details: `At the end of the maze leading to Golgoroth. Jump over the last hole in the ground and turn around. It's on the wall of the pit.`
}

const symbol6 = {
    symbol: '6.png',
    roomNumber: 6,
    details: 'Under the bottom left ledge in the golgoroth room (closest to the door you come in from. Think where people used to 1-orb cheese).'
}

const symbol7 = {
    symbol: '7.png',
    roomNumber: 7,
    details: 'Next to the secret chest in the dick wall jumping puzzle.'
}

const symbol8 = {
    symbol: '8.png',
    roomNumber: 8,
    details: 'On the ceiling directly in front of the final door of the dick wall jumping puzzle.'
}

const symbol9 = {
    symbol: '9.png',
    roomNumber: 9,
    details: 'Above the entrance leading to Oryx/sisters (on the inside of the room).'
}

const orderedInstructions = [
    symbol1,
    symbol2,
    symbol3,
    symbol4,
    symbol5,
    symbol6,
    symbol7,
    symbol8,
    symbol9
]
const PuzzleStep = ({ instructions }) => {
    return (
        <div style={{ display: 'flex', paddingTop: '10px', paddingBottom: '10px' }}>
            <div style={{ paddingRight: '10px' }}>
                <img src={`/takenking/${instructions.symbol}`} alt={instructions} />
            </div>
            <div>
                <div><strong>{`Room ${instructions.roomNumber}`}</strong></div>
                <div>
                    {instructions.details}
                </div>
            </div>
        </div>
    )
}
const PuzzleSolution = ({ selected, onReset }) => {
    const displayed = orderedInstructions.filter(({ symbol }) => selected.includes(symbol))
    return (
        <div>
            <div>
                {
                    displayed.map((instructions) => (<PuzzleStep key={instructions.symbol} instructions={instructions} />))
                }
            </div>
            <div style={{ textAlign: 'center' }}>
                <Button variant="contained" onClick={onReset}>Reset</Button>
            </div>
        </div>
    )

}

export default PuzzleSolution