export const dataFetch = async () => {
  const rawData = await fetch('http://localhost:3001/api/v1/houses');
  return await rawData.json();
};