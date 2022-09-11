import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

const grabFileData = async (filePath) => {
    const fileInfo = await import(`${filePath}`)
    const res = await fetch(fileInfo.default)
    const text = await res.text()
    return text
}

export const BlogMain = () => {
    const [currentMd, setCurrentMd] = useState('')
    useEffect(() => {
        const grabFile = async () => {
            const text = await grabFileData('./test.md')
            setCurrentMd(text)
        }
        grabFile()
    })
    return (
        <div className="main-tab-content">
            <ReactMarkdown>{currentMd}</ReactMarkdown>
        </div>
    )
}