import * as actions from './index';

describe('All actions', () => {
  it('has a type of FETCH_DATA', () => {
    const mockData = [{}];
    const expected = {
      type: 'FETCH_DATA',
      data: mockData 
    };
    expect(actions.fetchData(mockData)).toEqual(expected);
  });
});