export const swornData = (state = [], action) => {
  switch (action.type) {
  case 'SHOW_MORE':
    console.log(action)
    return [...action.currentSwornMembers];
  default:
    return state;
  }
}