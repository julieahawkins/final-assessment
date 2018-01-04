import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import PropTypes, { array } from 'prop-types';

const CardContainer = ({ data }) => {
  const cards = data.map((house, index) => 
    <Card 
      key={`card-${index}`} 
      houseData={data[index]} />
  );

  return (
    <div className='Container'>
      {cards}
    </div>
  );
};

CardContainer.propTypes = {
  data: array.isRequired
};

const mapStateToProps = ({ data }) => ({ data });

export default connect(mapStateToProps, null)(CardContainer);