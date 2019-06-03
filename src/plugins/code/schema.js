// Copyright 2019 OpenStax Poland
// Licensed under the MIT license. See LICENSE file in the project root for
// full license text.

function normalizeCodeBlock(change, error) {
    /* istanbul ignore next */
    console.warn('Unhandled code (block) violation:', error.code)
}

function normalizeCodeInline(change, error) {
    const { code, child, node } = error

    switch (code) {
    case 'child_object_invalid':
        change.unwrapNodeByKey(child.key)
        break

    case 'node_text_invalid':
        change.removeNodeByKey(node.key)
        break

    /* istanbul ignore next */
    default:
        console.warn('Unhandled code (inline) violation:', code)
        break
    }
}

export default {
    blocks: {
        code: {
            nodes: [ { match: { object: 'text' } } ],
            normalize: normalizeCodeBlock,
        }
    },
    inlines: {
        code: {
            marks: [],
            nodes: [ { match: { object: 'text' } } ],
            normalize: normalizeCodeInline,
            text: t => t.length > 0,
        }
    }
}
