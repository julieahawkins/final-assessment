export const swornData = (state = [], action) => {
  switch (action.type) {
  case 'SHOW_MORE':
    return [...action.currentSwornMembers];
  default:
    return state;
  }
};