// Copyright 2018 OpenStax Poland
// Licensed under the MIT license. See LICENSE file in the project root for
// full license text.

import { Inline } from 'slate'

/**
 * Crate and insert a cross-reference.
 *
 * @param {Slate~Change} change
 * @param {string}       target ID of the target node
 * @param {string?}      document ID of the document in which target node
 *                                is located
 */
export function insertXref(change, target, document) {
    const data = { target }

    if (document != null) {
        data.document = document
    }

    const ref = Inline.create({ type: 'xref', data })
    change.insertInline(ref)
}
