import React from 'react'
import { Button } from '@rmwc/button'

const Main = () => {
    return (
        <div style={{ paddingLeft: '20px' }}>
            <div><h2>Organize a Raid For:</h2></div>
            <div style={{ marginBottom: '20px' }}><Button raised>Garden Of Salvation</Button></div>
            <div><Button raised>Deep Stone Crypt</Button></div>
        </div>
    )
}

export default Main