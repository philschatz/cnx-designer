/** @jsx h */

export default (change, editor) => {
  editor.event('onKeyDown', { key: 'Backspace' })
}

export const input = <value>
    <document>
        <exercise>
            <exproblem>
                <p>Problem</p>
            </exproblem>
            <exsolution>
                <p><cursor/>Solution</p>
            </exsolution>
        </exercise>
    </document>
</value>

export const output = <value>
    <document>
        <exercise>
            <exproblem>
                <p>Problem<cursor/>Solution</p>
            </exproblem>
        </exercise>
    </document>
</value>