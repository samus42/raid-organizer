import React from 'react'
import { Button } from '@rmwc/button'
import { useHistory } from "react-router-dom";

const Main = (props) => {
    const history = useHistory()
    return (
        <div style={{ paddingLeft: '20px' }}>
            <div><h2>Organize a Raid For:</h2></div>
            <div style={{ marginBottom: '20px' }}><Button raised onClick={() => history.push('/raid/garden')}>Garden Of Salvation</Button></div>
            <div><Button raised onClick={() => history.push('/raid/crypt')}>Deep Stone Crypt</Button></div>
        </div>
    )
}

export default Main