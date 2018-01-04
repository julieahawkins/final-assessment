export const setData = (data) => ({
  type: 'FETCH_DATA',
  data
});

export const showMoreDetails = (currentSwornMembers) => ({
  type: 'SHOW_MORE',
  currentSwornMembers
});