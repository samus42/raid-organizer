import React from 'react'
import { useDrag } from 'react-dnd'


const DraggablePlayer = ({ player, onMoved = () => { } }) => {
    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: 'player',
            item: { player },
            canDrag: () => player.destinyId
        }), [player])

    const opacity = isDragging ? 0.5 : 1
    if (!player) {
        return (<div></div>)
    }
    return (
        (<div ref={drag} style={{ opacity }} className='draggable-player'>
            <div style={{ display: 'flex' }} >
                <img src={player.iconPath} style={{ width: '24px', height: '24px' }} alt="" /><div style={{ paddingLeft: '5px' }}>{player.name}</div>
            </div>
        </div>)
    )
}


export default DraggablePlayer