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

function filterNotesByPriority(notes, priority) {
    let filteredNotes = []
    const priorityArray = Object.keys(priority)
    const checkEveryPriorityIsFalse = categoryName =>
        priority[categoryName] === false
    const AllCategoryAreFalse = priorityArray.every(checkEveryPriorityIsFalse)

    for (const priorityName of priorityArray) {
        if (priority[priorityName]) {
            const temp = notes.filter(
                ({ priority }) => priority.toLowerCase() === priorityName.toLowerCase()
            )
            filteredNotes = [...filteredNotes, ...temp]
        }
    }
    return AllCategoryAreFalse ? notes : filteredNotes
}

export { sortNotesByAge, filterNotesByPriority }