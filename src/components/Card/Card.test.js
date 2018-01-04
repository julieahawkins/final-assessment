import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card test', () => {
  it('should match its snap shot', () => {
    const mockHouseData = {
      name: 'House Hightower of the Hightower', 
      words: 'We Light the Way', 
      founded: 'Age of Dawn', 
      seats: ['The Hightower, Oldtown'], 
      titles: [
        'Lord of the Hightower',
        'Lord of the Port',
        'Voice of Oldtown',
        'Defender of the Citadel',
        'Beacon of the South',
        'King of the High Tower (formerly)'
      ], 
      ancestralWeapons: ['Vigilance'], 
      coatOfArms: 'Cendrée, a tower argent with a beacon on fire gules'  
    };

    const renderedCard = shallow(<Card houseData={mockHouseData}/>);
    // console.log(renderedCard.debug());

    expect(renderedCard).toMatchSnapshot();
  });
});