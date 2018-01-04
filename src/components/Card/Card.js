import React from 'react';

const Card = ({ houseData }) => {
  console.log(houseData)
  const { 
    name, 
    words, 
    founded, 
    seats, 
    titles, 
    ancestralWeapons, 
    coatOfArms 
  } = houseData;

  const titleDisplay = titles.map((title, index) => {
    return <p key={`title-${index}`}>title: {title}</p>
  })

  return (
    <div className='Card'>
      <h1>{name}</h1>
      <h2>{words}</h2>
      <h3>{founded}</h3>
      {titleDisplay}
      <p>{coatOfArms}</p>
    </div>
  )
}

export default Card;