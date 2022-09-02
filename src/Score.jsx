import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const Score = ({score}) => {
  const [bestScore,setBestScore]=useState(0)
  useEffect(()=>{
    if(score>bestScore)setBestScore(score);
  },[score])

  return (
    <div className='score-viewer'>
      Best Score: {bestScore} <br />
      Score: {score}
    </div>
    )
}
