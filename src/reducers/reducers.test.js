import * as actions from '../actions';
import { houseData } from './data-reducer';
import { swornData } from './sworn-members-reducer';

describe('houseData reducer', () => {
  it('should return the default state', () => {
    const expected = [];

    expect(houseData(undefined, [])).toEqual(expected);
  });

  it('should return new a state with all houseData as an array', () => {
    const expected = [{ name: 'House Stark of Winterfell'}];
    const action = actions.setData(expected);

    expect(houseData(undefined, action)).toEqual(expected);
  });
});

describe('swornData reducer', () => {
  it('should return the default state', () => {
    const expected = [];

    expect(swornData(undefined, [])).toEqual(expected);
  });

  it('should return new a state with all swornData as an array', () => {
    const expected = [{ name: 'Arya Stark'}];
    const action = actions.showMoreDetails(expected);

    expect(swornData(undefined, action)).toEqual(expected);
  });
});
