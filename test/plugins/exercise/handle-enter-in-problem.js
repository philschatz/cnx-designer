/** @jsx h */

export default (change, editor) => {
    editor.event('onKeyDown', { key: 'Enter' })
    editor.event('onKeyDown', { key: 'Enter' })
}

export const input = <value>
    <document>
        <exercise>
            <exproblem>
                <p>Pro<cursor/>blem</p>
            </exproblem>
            <exsolution>
                <p>Solution</p>
            </exsolution>
        </exercise>
    </document>
</value>

export const output = <value>
    <document>
        <exercise>
            <exproblem>
                <p>Pro</p>
            </exproblem>
            <exsolution>
                <p><cursor/>blem</p>
            </exsolution>
            <exsolution>
                <p>Solution</p>
            </exsolution>
        </exercise>
    </document>
</value>