export const dataFetch = async () => {
  try {
    const rawData = await fetch('http://localhost:3001/api/v1/houses');
    return await rawData.json();
  } catch (error) {
    return null;
  }
};

export const fetchMoreData = async (swornMembers) => {
  const swornData = swornMembers.map(async (url) => {
    try {
      const rawData = await fetch('http://localhost:3001/api/v1/character', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: url })
      });

      return await rawData.json();
    } catch (error) {
      return null;
    }
  });

  return Promise.all(swornData)
};