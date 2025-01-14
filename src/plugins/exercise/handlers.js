// Copyright 2018 OpenStax Poland
// Licensed under the MIT license. See LICENSE file in the project root for
// full license text.

export default function onKeyDown(event, change, next) {
    switch (event.key) {
    case 'Enter':
        return onEnter(event, change) || next()

    default:
        return next()
    }
}

function onEnter(event, change) {
    // Pressing shift should disable any special key handling
    if (event.shiftKey) {
        return false
    }

    const { value } = change
    const { selection } = value
    const block = value.startBlock

    // Only handle key if selection is in an empty block, or at a beginning
    // of a block, ...
    const isEmpty = selection.isCollapsed
        && selection.start.isAtStartOfNode(block)
        && selection.end.isAtEndOfNode(block)
    if (!isEmpty && selection.start.offset > 0) return false

    // ... in an exercise.
    const exercise = change.getActiveExercise(change.value)
    if (!exercise) return false

    const item = exercise.getParent(block.key)
    const isItemLast = exercise.getNextSibling(item.key) === null
    const atStartOfItem = item.getPreviousBlock(block.key) === null

    // Splitting here would create an empty item, ...
    if (atStartOfItem) {
        // ... but since this is the last item we can just unwrap it.
        if (isItemLast) {
            change.unwrapNodeByKey(item.key)
            return true
        }

        // Otherwise we do nothing.
        return true
    }

    // Otherwise split current block, and ...

    if (item.type === 'exercise_commentary') {
        // .. since its exercise_commentary then schema normalizations would
        // put it back together, so we need to unwrap it manually.
        const index = exercise.nodes.indexOf(item)
        change.withoutNormalizing(change => {
            change.splitNodeByKey(item.key, item.nodes.indexOf(block))
            const node = change.value.document.getNode(exercise.key)
            const newItem = node.nodes.get(index + 1)
            change.unwrapNodeByKey(newItem.key)
        })
    } else {
        // ... let schema normalizations do the rest.
        change.splitNodeByKey(item.key, item.nodes.indexOf(block))
    }

    return true
}
