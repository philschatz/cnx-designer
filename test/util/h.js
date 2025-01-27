import { createHyperscript } from 'slate-hyperscript'

export default global.h = createHyperscript({
    blocks: {
        code: 'code',
        definition: 'definition',
        defterm: 'definition_term',
        defmeaning: 'definition_meaning',
        defexample: 'definition_example',
        defseealso: 'definition_seealso',
        excomment: 'exercise_commentary',
        exercise: 'exercise',
        exproblem: 'exercise_problem',
        exsolution: 'exercise_solution',
        figcaption: 'figure_caption',
        figure: 'figure',
        h: 'heading',
        img: 'image',
        important: {
            type: 'admonition',
            data: { type: 'important' },
        },
        li: 'list_item',
        media: 'media',
        mediaalt: 'media_alt',
        note: {
            type: 'admonition',
            data: { type: 'note' },
        },
        ol: 'ol_list',
        p: 'paragraph',
        preformat: 'preformat',
        quote: 'quotation',
        section: 'section',
        tip: {
            type: 'admonition',
            data: { type: 'tip' },
        },
        title: 'title',
        ul: 'ul_list',
        warning: {
            type: 'admonition',
            data: { type: 'warning' },
        },
    },
    inlines: {
        codeinline: 'code',
        docref: 'docref',
        footnote: 'footnote',
        link: 'link',
        xref: 'xref',
        term: 'term',
    },
    marks: {
        b: 'strong',
        i: 'emphasis',
        sub: 'subscript',
        sup: 'superscript',
        u: 'underline',
    },
})
