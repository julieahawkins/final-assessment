import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object, func } from 'prop-types';
import { showMoreDetails } from '../../actions';
import { fetchMoreData } from '../../helpers/helper';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMore: false,
      houseSwornMembers: []
    };
  }
  
  handleClick = async () => {
    const { swornMembersUrls } = this.props.houseData;
    const swornMemberData = await fetchMoreData(swornMembersUrls);
    const houseSwornMembers = !this.state.houseSwornMembers.length 
      ? await this.props.showMoreDetails(swornMemberData).currentSwornMembers
      : [];
    const showMore = !this.state.showMore;
    this.setState({ showMore, houseSwornMembers });    
  }

  render() {
    const { 
      name, 
      words, 
      founded, 
      seats, 
      titles, 
      ancestralWeapons, 
      coatOfArms
    } = this.props.houseData;

    const { houseSwornMembers } = this.state;

    const swornMembersDisplay = houseSwornMembers.map((member, index) => 
      <p key={`member-${index}`}>{member.name}</p>
    );

    const displayMore = this.state.showMore 
      ? <div><h3>Sworn Members:</h3>{swornMembersDisplay}</div>
      : null;

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
      <div 
        className='Card'
        onClick={this.handleClick}>
        <h1>{name}</h1>
        <h2>{words}</h2>
        <h3>Founded: {founded || 'N/A'}</h3>
        {seatDisplay}
        {titleDisplay}
        {weaponsDisplay}
        <p>Coat of Arms: {coatOfArms}</p>
        {displayMore}
      </div>
    );
  }
}

Card.propTypes = {
  houseData: object.isRequired,
  showMoreDetails: func.isRequired
};

const mapStateToProps = ({ currentSwornData }) => ({ currentSwornData });

const mapDispatchToProps = dispatch => ({ 
  showMoreDetails: (swornMembers) => dispatch(showMoreDetails(swornMembers))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);