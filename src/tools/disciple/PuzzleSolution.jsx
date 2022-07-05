import React from 'react'
import { Button } from '@mui/material'

const pyramidInstructions = {
    symbol: 'pyramid-alpha.png',
    roomNumber: 1,
    details: 'At the bottom of the very first drop after finding the puzzle key. As soon as you land, turn around. The switch and doorway will be in front of you.'
}

const giftInstructions = {
    symbol: 'gift-alpha.png',
    roomNumber: 2,
    details: 'In the room with frozen blocks, just after the symbol room, and just before the very first encounter.'
}

const darknessInstructions = {
    symbol: 'darkness-alpha.png',
    roomNumber: 3,
    details: 'Inside the first encounter room. You will find the switch up on top of the left structure, near the bulbous end of the massive bone in the middle of the room.'
}

const travelerInstructions = {
    symbol: 'traveler-alpha.png',
    roomNumber: 4,
    details: 'In the room just before the Caretaker encounter. The switch is up on a ledge above the closed door, behind a statue.'
}

const worshipInstructions = {
    symbol: 'worship-alpha.png',
    roomNumber: 5,
    details: 'Immediately after the Caretaker battle, in the Final Stand area. Turn around and the switch will be at the far end, opposite the loot chest, on the right. The door is on the left.'
}

const lightInstructions = {
    symbol: 'light-alpha.png',
    roomNumber: 6,
    details: 'In the jump puzzle. Inside the first room full of enemies. The switch will be high up on the wall on the left side. The door will be a little to the right from the switch.'
}

const stopInstructions = {
    symbol: 'stop-alpha.png',
    roomNumber: 7,
    details: 'In the jump puzzle. Inside the last room full of enemies. The switch will be tucked into the corner of the room opposite from the jump puzzle switch. The doorway is in the middle of the room.'
}

const guardianInstructions = {
    symbol: 'guardian-alpha.png',
    roomNumber: 8,
    details: 'Immediately after the Upended (Relics encounter). After the loot chest, go to the left and take the first stairs up. On that level, go to the left edge. Turn around and look out into the air near the giant pillar to find the switch. The doorway is hidden above the same stairwell you just climbed, behind a statue.'
}

const killInstructions = {
    symbol: 'kill-alpha.png',
    roomNumber: 9,
    details: 'The switch is found on the last floor immediately before jumping down to the final encounter. The switch will be floating in the air.'
}

const orderedInstructions = [
    pyramidInstructions,
    giftInstructions,
    darknessInstructions,
    travelerInstructions,
    worshipInstructions,
    lightInstructions,
    stopInstructions,
    guardianInstructions,
    killInstructions
]
const PuzzleStep = ({ instructions }) => {
    return (
        <div style={{ display: 'flex', paddingTop: '10px', paddingBottom: '10px' }}>
            <div style={{ paddingRight: '10px' }}>
                <img src={`/disciple/${instructions.symbol}`} alt={instructions} />
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