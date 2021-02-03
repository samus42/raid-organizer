import React, { useState, useEffect } from 'react'
import { TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarTitle, TopAppBarFixedAdjust } from '@rmwc/top-app-bar'
import { Button } from '@rmwc/button'
import { useHistory, useLocation } from 'react-router-dom'
import packageJSON from '../package.json'
import { SimpleMenu, MenuItem } from '@rmwc/menu'
import { getCurrentUserInfo, clearMembershipInfo } from './user/currentUser'

const clientId = process.env.REACT_APP_CLIENT_ID
const bungieLoginUrl = `https://www.bungie.net/en/OAuth/Authorize?client_id=${clientId}&response_type=code`

const ApplicationBar = (props) => {
    const history = useHistory()
    const location = useLocation()
    const [userInfo, setUserInfo] = useState(null)
    useEffect(() => {
        setUserInfo(getCurrentUserInfo)
    }, [location])

    const onLogout = () => {
        clearMembershipInfo()
        setUserInfo(null)
    }

    const onProfile = () => {
        console.log(props)
        history.push('/profile')
    }
    return (<>
        <TopAppBar>
            <TopAppBarRow>
                <TopAppBarSection>
                    <TopAppBarTitle style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        <a href="/" style={{ textDecoration: 'none', color: 'white', paddingTop: '5px' }}>Shenaniganizers <small>{packageJSON.version}</small></a>
                    </TopAppBarTitle>
                </TopAppBarSection>
                <TopAppBarSection alignEnd>
                    {userInfo ?
                        (<SimpleMenu
                            handle={<div className="menu-bar-user" style={{ display: 'flex' }}><img alt="user" src={userInfo.profilePictureUrl} style={{ width: '24px', height: '24px' }} /><div style={{ paddingLeft: '10px' }}> {userInfo.name}</div></div>} >
                            <MenuItem onClick={onLogout}>Logout</MenuItem>
                            <MenuItem onClick={onProfile}>Profile</MenuItem>
                        </SimpleMenu>
                        )
                        : (<Button raised onClick={() => window.location.href = bungieLoginUrl}>Login</Button>)
                    }
                </TopAppBarSection>
            </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust />
    </>)
}

export default ApplicationBar