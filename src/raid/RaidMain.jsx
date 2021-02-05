import React, { useState, useLayoutEffect } from 'react'
import RaidDetails from './RaidDetails'
import MobileMain from './mobile/MobileMain'



const RaidMain = (props) => {
    const [screenLayout, setScreenLayout] = useState('desktop')
    useLayoutEffect(() => {
        const updateSize = () => {
            console.log(window.innerWidth)
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

    if (screenLayout === 'mobile') {
        return <MobileMain {...props} />
    }
    return <RaidDetails {...props} />
}

export default RaidMain