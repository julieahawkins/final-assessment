import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';
import configureMockStore from 'redux-mock-store';

describe('CardContainer test', () => {
  const fakeStore = configureMockStore()({
    data: []
  });

  const setup = () => {
    const wrapper = shallow(
      <Provider store={fakeStore}>
        <CardContainer />
      </Provider>
    );
    const Component = wrapper.find(CardContainer);

    return {
      Component
    };
  };

  it('should match its snap shot', () => {

    expect(setup.wrapper).toMatchSnapshot();
  });
})