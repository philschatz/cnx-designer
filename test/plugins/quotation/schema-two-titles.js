/** @jsx h */

export default change => change.normalize()

export const input = <value>
    <document>
        <quote>
            <title>First title</title>
            <title>Second title</title>
            <p>Content</p>
        </quote>
    </document>
</value>

export const output = <value>
    <document>
        <quote>
            <title>First title</title>
            <p>Second title</p>
            <p>Content</p>
        </quote>
    </document>
</value>
