function createNoteReducer(state, action) {
  switch (action.type) {
    case 'TITLE':
      return { ...state, title: action.payload }
    case 'BODY':
      return { ...state, body: action.payload }
    case 'COLOR':
      return { ...state, color: action.payload }
    case 'ARCHIVE':
      return { ...state, archive: !state.archive }
    case 'PINNED':
      return { ...state, pinned: action.payload }
    default:
      return { ...state }
  }
}
export { createNoteReducer }
