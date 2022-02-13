import React, { useState, useEffect, useLayoutEffect } from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Avatar,
    Button,
    Menu,
    MenuItem,
} from '@mui/material'
import { useHistory, useLocation } from 'react-router-dom'
import { getCurrentUserInfo, clearMembershipInfo } from './user/currentUser'

const clientId = process.env.REACT_APP_CLIENT_ID
const bungieLoginUrl = `https://www.bungie.net/en/OAuth/Authorize?client_id=${clientId}&response_type=code`

const ApplicationBar = (props) => {
    const history = useHistory()
    const location = useLocation()
    const [userInfo, setUserInfo] = useState(null)
    const [screenLayout, setScreenLayout] = useState('desktop')
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    useEffect(() => {
        setUserInfo(getCurrentUserInfo)
    }, [location])

    useLayoutEffect(() => {
        const updateSize = () => {
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

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    const onLogout = () => {
        clearMembershipInfo()
        setUserInfo(null)
        handleClose()
    }

    const onProfile = () => {
        history.push('/profile')
        handleClose()
    }
    return (
        <AppBar position="static">
            <Toolbar>
                <a href="/" style={{ textDecoration: 'none', color: 'white', paddingTop: '5px' }}>
                    {screenLayout === 'desktop' ? (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="/chaos-white.png" style={{ width: '56px' }} alt="" />
                            <Typography variant="h6" color="inherit" component="div" sx={{ paddingLeft: '10px' }}>
                                Shenaniganizers
                            </Typography>
                        </div>
                    ) : 'Shenaniganizers'}
                </a>
                <Box sx={{ flexGrow: 1 }} />
                {userInfo ? (
                    <div className="menu-surface">
                        <Box sx={{ display: 'flex', alignItems: 'center' }} onClick={handleClick}>
                            <Avatar alt="User" src={userInfo.iconPath} />
                            <div style={{ paddingLeft: '10px' }}>{userInfo.name}</div>
                        </Box>
                        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                            <MenuItem onClick={onProfile}>Profile</MenuItem>
                            <MenuItem onClick={onLogout}>Logout</MenuItem>
                        </Menu>
                    </div>
                ) : (<Button raised onClick={() => window.location.href = bungieLoginUrl}>Login</Button>)}
            </Toolbar>
        </AppBar >
        // <>
        //     <TopAppBar>
        //         <TopAppBarRow>
        //             <TopAppBarSection>
        //                 <TopAppBarTitle style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        //                     <a href="/" style={{ textDecoration: 'none', color: 'white', paddingTop: '5px' }}>
        //                         {screenLayout === 'desktop' ? (
        //                             <div style={{ display: 'flex' }}>
        //                                 <img src="/chaos-white.png" style={{ width: '56px' }} alt="" />
        //                                 <div style={{ paddingLeft: '10px', paddingTop: '13px' }}>Shenaniganizers</div>
        //                             </div>
        //                         ) : 'Shenaniganizers'}
        //                     </a>
        //                 </TopAppBarTitle>
        //             </TopAppBarSection>
        //             <TopAppBarSection alignEnd>
        //                 {userInfo ?
        //                     (<SimpleMenu
        //                         handle={<div className="menu-bar-user" style={{ display: 'flex' }}><img alt="user" src={userInfo.iconPath} style={{ width: '24px', height: '24px' }} /><div style={{ paddingLeft: '10px' }}> {userInfo.name}</div></div>} >
        //                         <MenuItem onClick={onLogout}>Logout</MenuItem>
        //                         <MenuItem onClick={onProfile}>Profile</MenuItem>
        //                     </SimpleMenu>
        //                     )
        //                     : (<Button raised onClick={() => window.location.href = bungieLoginUrl}>Login</Button>)
        //                 }
        //             </TopAppBarSection>
        //         </TopAppBarRow>
        //     </TopAppBar>
        //     <TopAppBarFixedAdjust />
        // </>
    )
}

export default ApplicationBar