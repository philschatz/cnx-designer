/** @jsx h */

import { List } from 'immutable'

export const input = `
<document xmlns="http://cnx.rice.edu/cnxml">
    <content>
        <note id="n1">
            <para>Notes' default type is ‘note’.</para>
        </note>
        <note id="n2" type="warning">
            <title>This is a title</title>
            <para>And this is a paragraph</para>
        </note>
        <note id="n3" type="tip">Notes can also have text content.</note>
    </content>
    <glossary>
        <definition>
            <term>Term</term>
            <meaning>
                <para>Meaning</para>
            </meaning>
            <example>
                <para>Example</para>
            </example>
            <seealso>
                <term>Term</term>
            </seealso>
        </definition>
    </glossary>
</document>`

export const outputContent = <value>
    <document>
        <note key="n1" type="note" class={List()}>
            <p>Notes&apos; default type is ‘note’.</p>
        </note>
        <note key="n2" type="warning" class={List()}>
            <title>This is a title</title>
            <p>And this is a paragraph</p>
        </note>
        <note key="n3" type="tip" class={List()}>
            <p>Notes can also have text content.</p>
        </note>
    </document>
</value>

export const outputGlossary = <value>
    <document>
        <definition class={List()}>
            <defterm>Term</defterm>
            <defmeaning class={List()}>
                <p>Meaning</p>
                <defexample class={List()}>
                    <p>Example</p>
                </defexample>
            </defmeaning>
            <defseealso class={List()}>
                <defterm>Term</defterm>
            </defseealso>
        </definition>
    </document>
</value>
