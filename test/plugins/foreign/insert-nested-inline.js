/** @jsx h */

export default editor => editor.wrapInline({ type: 'term' })

export const input = <value>
    <document>
        <p>
            <text/>
            <foreign>Foreign <anchor/>term<focus/> text</foreign>
            <text/>
        </p>
    </document>
</value>

export const output = <value>
    <document>
        <p>
            <text/>
            <foreign>Foreign <term>term</term><cursor/> text</foreign>
            <text/>
        </p>
    </document>
</value>
