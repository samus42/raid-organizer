import React, { useState, useEffect } from 'react'
import { TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarTitle, TopAppBarFixedAdjust, TopAppBarActionItem } from '@rmwc/top-app-bar'
import { Button } from '@rmwc/button'
import { useHistory, useLocation } from 'react-router-dom'
import packageJSON from '../package.json'
import { SimpleMenu, MenuSurfaceAnchor, Menu, MenuItem } from '@rmwc/menu'

const clientId = process.env.REACT_APP_CLIENT_ID
const imageUrlPrefix = 'https://www.bungie.net'
const bungieLoginUrl = `https://www.bungie.net/en/OAuth/Authorize?client_id=${clientId}&response_type=code`

const getBungieUserInfo = () => {
    if (window.localStorage) {
        const rawInfo = window.localStorage.getItem('shenaniganizers-bungie-info')
        if (rawInfo && rawInfo !== 'null') {
            const membershipInfo = JSON.parse(rawInfo)
            return membershipInfo.bungieNetUser
        }
    }
    return null
}

const UserMenu = (userInfo) => {

}
const ApplicationBar = (props) => {
    const location = useLocation()
    const [userInfo, setUserInfo] = useState(null)
    useEffect(() => {
        setUserInfo(getBungieUserInfo)
    }, [location])

    const onLogout = () => {
        window.localStorage.removeItem('shenaniganizers-bungie-info')
        setUserInfo(null)
    }
    return (<>
        <TopAppBar>
            <TopAppBarRow>
                <TopAppBarSection>
                    <TopAppBarTitle style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        <a href="/" style={{ textDecoration: 'none', color: 'white', paddingTop: '5px' }}>Raid Shenanigans <small>{packageJSON.version}</small></a>
                    </TopAppBarTitle>
                </TopAppBarSection>
                <TopAppBarSection alignEnd>
                    {userInfo ?
                        (<SimpleMenu
                            handle={<img alt="user" src={`${imageUrlPrefix}${userInfo.profilePicturePath}`} style={{ width: '24px', height: '24px' }} />} >
                            <MenuItem onClick={onLogout}>Logout</MenuItem>
                            <MenuItem>Profile</MenuItem>
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