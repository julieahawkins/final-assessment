export const dataFetch = async () => {
  try {
    const rawData = await fetch('http://localhost:3001/api/v1/houses');
    return await rawData.json();
  } catch (error) {
    return null;
  }
};

export const fetchMoreData = async (swornMembers) => {
  swornMembers.forEach(async (url) => {
    try {
      const rawData = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {url: JSON.stringify(url)}
      });
      const memberData = await rawData.json();
      console.log(memberData)
    } catch (error) {
      return null;
    }
  });
};