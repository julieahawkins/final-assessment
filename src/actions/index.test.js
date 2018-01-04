import * as actions from './index';

describe('All actions', () => {
  it('has a type of FETCH_DATA', () => {
    const mockData = [{}];
    const expected = {
      type: 'FETCH_DATA',
      data: mockData 
    };
    expect(actions.setData(mockData)).toEqual(expected);
  });

  it('has a type of SHOW_MORE', () => {
    const mockData = [{}];
    const expected = {
      type: 'SHOW_MORE',
      currentSwornMembers: mockData 
    };
    expect(actions.showMoreDetails(mockData)).toEqual(expected);
  });
});