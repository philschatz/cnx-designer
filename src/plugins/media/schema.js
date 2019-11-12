// Copyright 2019 OpenStax Poland
// Licensed under the MIT license. See LICENSE file in the project root for
// full license text.

import { Block, Text } from 'slate'

function normalizeMedia(change, error) {
    const { code: violation, node, key } = error

    switch (violation) {
    case 'child_min_invalid':
        if (error.index === 1) {
            change.insertNodeByKey(node.key, 1, Block.create({
                type: 'media_alt',
                nodes: [Text.create(node.data.get('alt'))],
            }))
            return
        }
        console.warn("Unhandled media violation", violation)
        break

    case 'node_data_invalid':
        if (key === 'alt') {
            const mediaAlt = node.nodes.find(n => n.type === 'media_alt')
            if (!mediaAlt) {
                change.insertNodeByKey(node.key, 1, Block.create({
                    type: 'media_alt',
                    nodes: [Text.create(node.data.get('alt'))],
                }))
            }
            // Remove data alt.
        }
        break

    /* istanbul ignore next */
    default:
        console.warn("Unhandled media violation", violation)
        break
    }
}

export default function schema({ inlines }) {
    return {
        blocks: {
            media: {
                nodes: [
                    {
                        match: [
                            { type: 'audio' },
                            { type: 'image' },
                            { type: 'video' },
                        ],
                        min: 1,
                    },
                    { match: { type: 'media_alt' }, min: 1, max: 1 },
                ],
                normalize: normalizeMedia,
            },
            media_alt: {
                nodes: [{
                    match: [
                        ...inlines.map(type => ({ type })),
                        { object: 'text' },
                    ],
                }],
                marks: [],
            },
            audio: {
                isVoid: true,
                data: {
                    src: s => typeof s === 'string',
                    mime: m => typeof m === 'string',
                    for: s => s == null || ['default', 'pdf', 'online'],
                    standby: s => s == null || typeof s === 'string',
                    autoplay: a => a == null || typeof a === 'boolean',
                    loop: l => l == null || typeof l === 'boolean',
                    controller: c => c == null || typeof c === 'boolean',
                    volume: v => v == null
                      || (typeof v === 'number' && 0 < v && v <= 100),
                    longdesc: l => l == null || typeof l === 'string',
                },
            },
            image: {
                isVoid: true,
                data: {
                    src: s => typeof s === 'string',
                    mime: m => typeof m === 'string',
                    for: s => s == null || ['default', 'pdf', 'online'],
                    height: h => h == null || typeof h === 'number',
                    width: w => w == null || typeof w === 'number',
                    "print-width": p => p == null || /[0-9]+[a-z]+/.test(p),
                    thumbnail: t => t == null || typeof t === 'string',
                    longdesc: l => l == null || typeof l === 'string',
                },
            },
            video: {
                isVoid: true,
                data: {
                    src: s => typeof s === 'string',
                    mime: m => typeof m === 'string',
                    for: s => s == null || ['default', 'pdf', 'online'],
                    standby: s => s == null || typeof s === 'string',
                    autoplay: a => a == null || typeof a === 'boolean',
                    loop: l => l == null || typeof l === 'boolean',
                    controller: c => c == null || typeof c === 'boolean',
                    volume: v => v == null
                      || (typeof v === 'number' && 0 < v && v <= 100),
                    longdesc: l => l == null || typeof l === 'string',
                    height: h => h == null || typeof h === 'number',
                    width: w => w == null || typeof w === 'number',
                },
            },
        },
    }
}
