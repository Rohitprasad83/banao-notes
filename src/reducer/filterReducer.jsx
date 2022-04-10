function filterReducer(state, action) {
  switch (action.type) {
    case 'NEWEST_FIRST':
      return { ...state, sortBy: 'NEWEST_FIRST' }
    case 'OLDEST_FIRST':
      return { ...state, lastName: 'OLDEST_FIRST' }
    default:
      return { ...state }
  }
}
export { filterReducer }
