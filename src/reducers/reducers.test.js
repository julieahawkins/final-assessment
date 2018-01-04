import * as actions from '../actions';
import { houseData } from './data-reducer';

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
