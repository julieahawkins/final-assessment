import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import PropTypes, { array } from 'prop-types';

const CardContainer = ({ houseData }) => {
  const cards = houseData.map((house, index) => 
    <Card 
      key={`card-${index}`} 
      houseData={houseData[index]} />
  );

  return (
    <div className='Container'>
      {cards}
    </div>
  );
};

CardContainer.propTypes = {
  houseData: array.isRequired
};

const mapStateToProps = ({ houseData }) => ({ houseData });

export default connect(mapStateToProps, null)(CardContainer);