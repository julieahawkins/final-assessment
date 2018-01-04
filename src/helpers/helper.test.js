import { dataFetch, fetchMoreData } from './helper';

describe('dataFetch', () => {
  it('should return all fetched houseData as an array', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(
          [{ name: 'House Lannister of Casterly Rock' }]
        )
      })
    );

    const fetch = await dataFetch();
    const mockHouseData = [{ name: 'House Lannister of Casterly Rock' }];

    expect(fetch).toEqual(mockHouseData);
  });

  it('should return an error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject()
    );

    const fetch = await dataFetch();

    expect(fetch).toEqual(null);
  });
});

describe('fetchMoreData', () => {
  it('should return all fetched houseData as an array', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(
          { name: 'House Lannister of Casterly Rock' }
        )
      })
    );
    const url = ['house member url'];
    const mockHouseData = [{ name: 'House Lannister of Casterly Rock' }];
    const fetch = await fetchMoreData(url);

    expect(fetch).toEqual(mockHouseData);
  });

  it('should return an error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject()
    );
    const url = ['house member url'];
    const fetch = await fetchMoreData(url);

    expect(fetch).toEqual([null]);
  });
});