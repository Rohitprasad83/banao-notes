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
    case 'Work':
      return { ...state, tags: { ...state.tags, Work: !state.tags.Work } }
    case 'Exercise':
      return {
        ...state,
        tags: { ...state.tags, Exercise: !state.tags.Exercise },
      }
    case 'Health':
      return { ...state, tags: { ...state.tags, Health: !state.tags.Health } }
    case 'School':
      return { ...state, tags: { ...state.tags, School: !state.tags.School } }
    case 'Teams':
      return { ...state, tags: { ...state.tags, Teams: !state.tags.Teams } }
    case 'Chores':
      return { ...state, tags: { ...state.tags, Chores: !state.tags.Chores } }
    case 'Creativity':
      return {
        ...state,
        tags: { ...state.tags, Creativity: !state.tags.Creativity },
      }
    default:
      return { ...state }
  }
}
export { filterReducer }
