/** @jsx h */

export const input = cnxml`
<figure id="f1">
    <media alt="Figure content">
        <image src="f1.png" />
    </media>
    <caption>Figure caption</caption>
</figure>
`

export const output = <value>
    <document>
        <figure key="f1">
            <media alt="Figure content">
                <img src="f1.png"><text/></img>
            </media>
            <figcaption>Figure caption</figcaption>
        </figure>
    </document>
</value>
