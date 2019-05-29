// Copyright 2019 OpenStax Poland
// Licensed under the MIT license. See LICENSE file in the project root for
// full license text.

function normalizeDocument(change, error) {
    const { code, node, child } = error

    switch (code) {
    // Document is empty.
    case 'child_min_invalid':
        change.insertNodeByKey(node.key, 0, {
            object: 'block',
            type: 'paragraph',
        })
        break

    case 'child_type_invalid':
        if (child.type === 'invalid') {
            change.removeNodeByKey(child.key)
            return
        }

        console.warn('Unhandled glossary document violation:', error.code)
        break

    default:
        console.warn('Unhandled glossary document violation:', error.code)
    }
}

export default function schema(options) {
    const content = options.content.map(type => ({ type }))

    return {
        document: {
            nodes: [
                { match: content },
            ],
            normalize: normalizeDocument,
        },
    }
}
