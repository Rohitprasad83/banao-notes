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
      console.log(action.payload)
      return { ...state, tags: action.payload }
    case 'RESET':
      return {
        ...state,
        title: '',
        body: '',
        color: '',
        archive: false,
        pinned: false,
      }
    default:
      return { ...state }
  }
}
export { createNoteReducer }
