/** @jsx h */

export default editor => editor.insertCommentary()

export const input = <value>
    <document>
        <exercise>
            <exproblem>
                <p><cursor/>Problem</p>
            </exproblem>
            <excomment>
                <p>Com<cursor/>mentary</p>
            </excomment>
        </exercise>
    </document>
</value>

export const output = <value>
    <document>
        <exercise>
            <exproblem>
                <p><cursor/>Problem</p>
            </exproblem>
            <excomment>
                <p>Com<cursor/>mentary</p>
            </excomment>
        </exercise>
    </document>
</value>
