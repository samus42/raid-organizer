import React from 'react'
import { Typography } from '@rmwc/typography'
const CalendarInstructions = () => {

    return (
        <div style={{ paddingTop: '10px', paddingLeft: '20px' }}>
            <Typography use="headline3">Calendar Subscription Help</Typography>
            <div>
                So typically just clicking on the link <a href="webcal://us-central1-shenaniganizers-e51d9.cloudfunctions.net/api/rest/calendar">webcal://us-central1-shenaniganizers-e51d9.cloudfunctions.net/api/rest/calendar</a> on your phone or computer should cause your calendar application to use it correctly. However not everyone's world is the same, so there are some alternate ways.

                <div style={{ paddingTop: '20px' }}>
                    <Typography use="headline6">Google Calendar</Typography>
                    <div>
                        <ul>
                            <li>Visit the <a href="https://calendar.google.com">Google Calendar Site</a></li>
                            <li>On the left hand side should be an area called <strong>Other Calendars</strong></li>
                            <li>Click on the plus (+) symbol.</li>
                            <li>Select <strong>From URL</strong></li>
                            <li>In the input box, paste <strong>webcal://us-central1-shenaniganizers-e51d9.cloudfunctions.net/api/rest/calendar</strong></li>
                            <li>Hit the <strong>Add Calendar</strong> button and you should be good to go.</li>
                        </ul>
                    </div>
                </div>
                <div style={{ paddingTop: '10px' }}>
                    <Typography use="headline6">OSX (i.e. an Apple computer)</Typography>
                    <div>
                        <ul>
                            <li>Just clicking on the link should allow your Calendar app to try to use it, but if that doesn't work, do the following.</li>
                            <li>Open the Calendar app</li>
                            <li>In the menu go to File - New Calendar Subscription</li>
                            <li>Paste in the url paste <strong>webcal://us-central1-shenaniganizers-e51d9.cloudfunctions.net/api/rest/calendar</strong></li>
                            <li>If you have an iPhone, this should sync with it as well.</li>
                        </ul>
                    </div>
                </div>
                <div style={{ paddingTop: '10px' }}>
                    <Typography use="headline6">iPhone</Typography>
                    <div>
                        <ul>
                            <li>First make sure you're on the latest iOS. If you're not, then update then try to click on the link again in your phone.</li>
                            <li>If that still doesn't work, go to your Setting app.</li>
                            <li>Select Calendar</li>
                            <li>Select Accounts</li>
                            <li>Select Add Account</li>
                            <li>Select Other</li>
                            <li>Select Add Subscribed Calendar</li>
                            <li>Put the url paste <strong>webcal://us-central1-shenaniganizers-e51d9.cloudfunctions.net/api/rest/calendar</strong> into the server field, if this doesn't work, take off the webcal:// part of the url.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalendarInstructions