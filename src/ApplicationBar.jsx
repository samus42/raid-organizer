import { TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarTitle, TopAppBarFixedAdjust } from '@rmwc/top-app-bar'
import packageJSON from '../package.json'


const ApplicationBar = (props) => {
    console.log('app bar')
    return (<>
        <TopAppBar>
            <TopAppBarRow>
                <TopAppBarSection>
                    <TopAppBarTitle style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        <a href="/" style={{ textDecoration: 'none', color: 'white', paddingTop: '5px' }}>Raid Shenanigans <small>{packageJSON.version}</small></a>
                    </TopAppBarTitle>
                </TopAppBarSection>
            </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust />
    </>)
}

export default ApplicationBar