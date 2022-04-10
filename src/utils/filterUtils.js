function sortNotesByAge(notes, sortBy) {
    switch (sortBy) {
        case 'NEWEST_FIRST':
            return [...notes].sort(
                (firstItem, secondItem) =>
                new Date(secondItem['createdOn']) - new Date(firstItem['createdOn'])
            )
        case 'OLDEST_FIRST':
            return [...notes].sort(
                (firstItem, secondItem) =>
                new Date(firstItem['createdOn']) - new Date(secondItem['createdOn'])
            )
        default:
            return notes
    }
}

export { sortNotesByAge }