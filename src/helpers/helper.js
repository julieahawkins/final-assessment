export const dataFetch = async () => {
  try {
    const rawData = await fetch('http://localhost:3001/api/v1/houses');
    return await rawData.json();
  } catch(e) {
    return null;
  }
};