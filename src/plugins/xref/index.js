// Copyright 2018 OpenStax Poland
// Licensed under the MIT license. See LICENSE file in the project root for
// full license text.

import schema from './schema'
import renderNode from './render'
import * as commands from './commands'
import * as queries from './queries'

export default function XReference(options={}) {
    return { commands, queries, schema, renderNode }
}
