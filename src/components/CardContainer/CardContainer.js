import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';

const CardContainer = ({ data }) => {
  const cards = data.map((house, index) => {
    return <Card key={`card-${index}`} houseData={data[index]} />
  })
  return (
    <div className='Container'>
      {cards}
    </div>
  )
}

const mapStateToProps = ({ data }) => ({ data });

export default connect(mapStateToProps, null)(CardContainer)