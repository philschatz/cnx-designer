import { Value, setKeyGenerator } from 'slate'
import Slate from 'slate-react'
import React, { Component } from 'react'

import Admonition from '../admonition'
import Exercise from '../exercise'
import Figure from '../figure'
import Header from '../header'
import List from '../list'
import Marks from '../marks'
import Media from '../media'
import Paragraph from '../paragraph'
import Section from '../section'
import Storage from '../storage/plugin'
import Title from '../title'
import Toolbar from '../toolbar'

import SnackBar from '../components/SnackBar'

import * as uuid from '../uuid'
setKeyGenerator(uuid.v4)


const list = List({})
const marks = Marks({})


const plugins = [
    ...marks.plugins,
    Paragraph({}),
    Header({}),
    Title({}),
    Section({}),
    Exercise({}),
    Admonition({}),
    ...list.plugins,
    Figure({}),
    Media({}),
    Toolbar({}),
]


export default class Editor extends Component {
    state = {
        value: this.props.value,
    }

    plugins = [Storage({ storage: this.props.storage }), ...plugins]

    onChange = ({ value }) => {
        this.setState({ value })
    }

    render() {
        return <SnackBar>
            <Slate.Editor
                className="editor"
                value={this.state.value}
                plugins={this.plugins}
                onChange={this.onChange}
                />
        </SnackBar>
    }
}
