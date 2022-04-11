function filterReducer(state, action) {
  switch (action.type) {
    case 'NEWEST_FIRST':
      return { ...state, sortBy: 'NEWEST_FIRST' }
    case 'OLDEST_FIRST':
      return { ...state, sortBy: 'OLDEST_FIRST' }
    case 'LOW':
      return {
        ...state,
        priority: { ...state.priority, low: !state.priority.low },
      }
    case 'MEDIUM':
      return {
        ...state,
        priority: { ...state.priority, medium: !state.priority.medium },
      }
    case 'HIGH':
      return {
        ...state,
        priority: { ...state.priority, high: !state.priority.high },
      }
    default:
      return { ...state }
  }
}
export { filterReducer }
