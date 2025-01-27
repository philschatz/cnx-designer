/** @jsx h */

export default editor => {
    editor.changeListType('ul_list')
    editor.moveToStartOfNode(editor.value.document.getNode('second'))
    editor.changeListType('ol_list')
}

export const checkSelection = false

export const input = <value>
    <document>
        <ol>
            <li>
                <p><cursor/>List</p>
            </li>
        </ol>
        <p key="second">Para</p>
    </document>
</value>

export const output = <value>
    <document>
        <ul>
            <li>
                <p>List</p>
            </li>
        </ul>
        <ol>
            <li>
                <p key="second">Para</p>
            </li>
        </ol>
    </document>
</value>
