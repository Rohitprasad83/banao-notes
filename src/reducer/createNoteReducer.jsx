function createNoteReducer(state, action) {
  switch (action.type) {
    case 'TITLE':
      return { ...state, title: action.payload }
    case 'BODY':
      return { ...state, body: action.payload }
    case 'COLOR':
      return { ...state, color: action.payload.color }
    case 'ARCHIVE':
      return { ...state, archive: !state.archive }
    case 'PINNED':
      return { ...state, pinned: action.payload }
    case 'TAGS':
      console.log(action.payload.item)
      return {
        ...state,
        tags: [...state.tags].includes(action.payload.item)
          ? [...state.tags].filter(item => item !== action.payload.item)
          : [...state.tags, action.payload.item],
      }
    case 'PRIORITY_LOW':
      return { ...state, priority: 'low' }
    case 'PRIORITY_MED':
      return { ...state, priority: 'medium' }
    case 'PRIORITY_HIGH':
      return { ...state, priority: 'high' }
    case 'RESET':
      return {
        ...state,
        title: '',
        body: '',
        color: '',
        archive: false,
        pinned: false,
        tags: '',
        priority: 'medium',
      }
    default:
      return { ...state }
  }
}
export { createNoteReducer }
