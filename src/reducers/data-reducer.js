export const data = (state=' ', action) => {
  switch (action.type) {
  case 'FETCH_DATA':
  console.log(action)
    return action.data;
  default:
    return state;
  }
};
