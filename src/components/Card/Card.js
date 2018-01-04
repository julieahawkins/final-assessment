import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { object } from 'prop-types';
import { showMoreDetails } from '../../actions';
import { fetchMoreData } from '../../helpers/helper';

const Card = ({ houseData, showMoreDetails }) => {
  const { 
    name, 
    words, 
    founded, 
    seats, 
    titles, 
    ancestralWeapons, 
    coatOfArms,
    swornMembers 
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

  const handleClick = async () => {
    showMoreDetails(await fetchMoreData(swornMembers))
    console.log('swornMembers')
  }

  return (
    <div 
      className='Card'
      onClick={handleClick}>
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

const mapDispatchToProps = dispatch => ({ 
  showMoreDetails: (swornMembers) => dispatch(showMoreDetails(swornMembers))
});

export default connect(null, mapDispatchToProps)(Card);