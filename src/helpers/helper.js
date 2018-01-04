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
      const rawData = await fetch(url);
      const member = await rawData.json();
      console.log(member)
    } catch (error) {
      return null;
    }
  });
};