import React from 'react';
import { connect } from 'react-redux';

const CardContainer = ({ data }) => {
  const cards = data.map(house => {
    return <Card />
  })
  return (
    <div className='Container'>
      {cards}
    </div>
  )
}

const mapStateToProps = ({ data }) => ({ data });

export default connect(mapStateToProps, null)(CardContainer)