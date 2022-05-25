import React, { useEffect, useState } from 'react'
import { charsData as chd } from './charsData'
import { Card } from './Card'
export const Board = ({ incrementScore, playerLost, score }) => {
    const [charsData, setCharsData] = useState(chd)
    const [selectedChars, setSelectedChars] = useState([])

    const addNewSelChar = (char) => setSelectedChars([...selectedChars, char])
    const getIsNewSelChar = (char) => !selectedChars.includes(char)
    
    useEffect(() => {
        console.log(selectedChars)
        let randIndex
        for (let i = 0; i < charsData.length; i++) {
            randIndex = Math.floor(Math.random() * charsData.length)
            let c = charsData[randIndex]
            charsData[randIndex] = charsData[i]
            charsData[i] = c
        }
        setCharsData(charsData)
    }, [score])

    const handleCardClick = (char) => {
        if (getIsNewSelChar(char)) {
            incrementScore()
            addNewSelChar(char)
        } else {
            playerLost()
            setSelectedChars([])
        }
        // setTimeout(()=>console.log(selectedChars),200)
    }
    return (
        <div className='board'>
            {charsData.map((charData) => <Card charData={charData} onClick={() => handleCardClick(charData)} />)}
        </div>
    )
}
