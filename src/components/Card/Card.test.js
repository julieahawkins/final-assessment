import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

describe('Card test', () => {
  const fakeStore = configureMockStore()({
    currentSwornData: []
  });


  const setup = () => {
    const props = {
      showMoreDetails: jest.fn()
    };

    const mockHouseDataProps = {
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

    const wrapper = shallow(
      <Provider store={fakeStore}>
        <Card houseData={mockHouseDataProps}/>
      </Provider>
    );
    const Component = wrapper.find(Card);

    return {
      Component
    };
  };

  it('should match its snap shot', () => {
    
    expect(setup.wrapper).toMatchSnapshot();
  });
});