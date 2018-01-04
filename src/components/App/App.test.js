import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import configureMockStore from 'redux-mock-store';


describe('App test', () => {
  const fakeStore = configureMockStore()({
    data: []
  });

  const setup = () => {
    const props = {
      fetchData: jest.fn(),
    }
   
    const wrapper = shallow(
      <Provider store={fakeStore}>
        <App />
      </Provider>
    );

    const Component = wrapper.find(App);

    return {
      props,
      Component
    };
  }  


  it('should match its snap shot', () => {

    expect(setup.wrapper).toMatchSnapshot();
  });
})