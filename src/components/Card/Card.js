import React from 'react';
import PropTypes, { object } from 'prop-types';

const Card = ({ houseData }) => {
  const { 
    name, 
    words, 
    founded, 
    seats, 
    titles, 
    ancestralWeapons, 
    coatOfArms 
  } = houseData;

  const weaponsDisplay = ancestralWeapons.map((weapon, index) => 
    <p key={`weapon-${index}`}>Ancestral Weapons: {weapon}</p>
  );

  const seatDisplay = seats.map((seat, index) => 
    <p key={`seat-${index}`}>Seat: {seat}</p>
  );

  const titleDisplay = titles.map((title, index) => 
    <p key={`title-${index}`}>Title: {title}</p>
  );

  return (
    <div className='Card'>
      <h1>{name}</h1>
      <h2>{words}</h2>
      <h3>Founded: {founded || 'N/A'}</h3>
      {seatDisplay}
      {titleDisplay}
      {weaponsDisplay}
      <p>Coat of Arms: {coatOfArms}</p>
    </div>
  );
};

Card.propTypes = {
  houseData: object.isRequired
};

export default Card;