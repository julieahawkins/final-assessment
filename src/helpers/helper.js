export const dataFetch = async () => {
  const rawData = await fetch('http://localhost:3001/api/v1/houses');
  const houseData = await rawData.json();
  console.log(houseData)
}