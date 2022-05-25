import React from 'react'

export const Card = ({charData,onClick}) => {
  const name=Object.keys(charData)[0]
  const imgURL=charData[name]
  return (
    <div onClick={onClick}>
      <img src={imgURL}/>
      <strong>{name}</strong>
    </div>
  )
}
