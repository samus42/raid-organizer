import React, { useState } from 'react'
import { Timeline, TimelineItem, TimelineSeparator, TimelineOppositeContent, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab'
import { Link, Avatar, Typography, Popover, Card, CardContent, List, ListItem } from '@mui/material'
import HotelIcon from '@mui/icons-material/Hotel';

const ace = 'Aaron Corcoran'
const samus = 'Scott MacDonald'
const samusIcon = 'https://www.bungie.net/img/profile/avatars/e2015_14.jpg'
const aceIcon = 'https://www.bungie.net//img/profile/avatars/avatar23.jpg'
const dolArnach = {
    author: ace,
    icon: aceIcon,
    title: 'Into the Lair of Dôl Arnách',
    pdf: 'https://drive.google.com/file/d/1aRAdXjs53rym6sK1TX0QnqLbMOhccBOK/view?usp=sharing',
    epub: 'https://drive.google.com/file/d/14oVvqN4yXzc7XzbztzsJbWumwChvAiIU/view?usp=sharing'
}
const thornInTwilight = {
    author: samus,
    icon: samusIcon,
    title: 'A Thorn In Twilight',
    pdf: 'https://drive.google.com/file/d/1IYXWvPoNCadS-PTuYfHjHayNVFKwSP8Y/view?usp=sharing',
    epub: 'https://drive.google.com/file/d/1BjwOC80JfBmZVaoKJtgPpn8m5J1OeUOD/view?usp=sharing'
}
const halilysWar = {
    author: ace,
    icon: aceIcon,
    title: `Halily's War`,
    pdf: 'https://drive.google.com/file/d/1KHoI2UM9XrucOfadcGYgQA-VmRZaIJam/view?usp=sharing',
    epub: 'https://drive.google.com/file/d/1NxuxoskUfQyGNrOMauO13GNuH_LaUmnU/view?usp=sharing'
}
const darkBalance = {
    author: samus,
    icon: samusIcon,
    title: 'A Dark Balance',
    subtext: 'Coming very soon!',
    pdf: null,
    epub: null
}
const redjackThief = {
    author: ace,
    icon: aceIcon,
    title: 'The Redjack Thief',
    pdf: 'https://drive.google.com/file/d/18fRu74TJTExGUI4KuevNN-OkAkOsp4IC/view?usp=sharing',
    epub: 'https://drive.google.com/file/d/1C98vmkwY-598Cm1OGHjrUpHkbsS7XoYP/view?usp=sharing'
}

function BookItem({ book, onClick }) {
    return (
        <TimelineItem>
            <TimelineOppositeContent>
                <small>{book.subtext || ''}</small>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot sx={{ padding: 0 }}>
                    <Avatar src={book.icon} sx={{ width: 36, height: 36 }} />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                {book.pdf ? (
                    <Typography variant="h6"><Link onClick={(evt) => onClick(evt, book)}>{book.title}</Link></Typography>
                ) :
                    (
                        <Typography variant="h6">{book.title}</Typography>
                    )
                }
                <Typography>{book.author}</Typography>
            </TimelineContent>
        </TimelineItem>
    )
}

function EventItem({ event, subtext }) {
    return (
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography variant="h6">{event}</Typography>
                <small>{subtext}</small>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                {/* <Typography variant="h6">Event</Typography> */}
            </TimelineContent>
        </TimelineItem>
    )
}

function BookDetails({ book }) {
    if (!book) {
        return null
    }
    return (
        <Card>
            <CardContent>
                <Typography variant="h4">{book.title}</Typography>
                <Typography variant="h6">Download Options</Typography>
                <List>
                    <ListItem><a href={book.pdf} target="_blank" rel="noreferrer">PDF</a></ListItem>
                    <ListItem><a href={book.epub} target="_blank" rel="noreferrer">ePub (for all eReaders, including Kindle)</a></ListItem>
                </List>
                <Typography variant="h6">If you want a print copy, just ask!</Typography>
            </CardContent>
        </Card>
    )
}
export default function Books() {
    const [anchorEl, setAnchorEl] = useState(null)
    const [selected, setSelected] = useState(null)
    const onBookClick = (evt, book) => {
        setAnchorEl(evt.currentTarget)
        setSelected(book)
    }
    const handlePopoverClose = () => {
        setAnchorEl(null)
        setSelected(null)
    }
    return (
        <div>
            <Typography variant="h6">Aaron and Scott (Ace and Samus) have written a few Destiny novels using a shared universe. Give them a try! See the timeline below for reading order. Click on a book link to get download options.</Typography>
            <Timeline>
                <EventItem event={`Crota's End`} />
                <EventItem event={`Fall of Oryx`} />
                <BookItem book={dolArnach} onClick={onBookClick} />
                <BookItem book={thornInTwilight} onClick={onBookClick} />
                <EventItem event="The Red War" />
                <BookItem book={halilysWar} onClick={onBookClick} />
                <BookItem book={darkBalance} />
                <EventItem event="Forsaken" />
                <BookItem book={redjackThief} onClick={onBookClick} />
            </Timeline>
            <Popover
                open={anchorEl}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <BookDetails book={selected} />
            </Popover>
        </div>
    )
}