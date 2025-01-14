// Copyright 2018 OpenStax Poland
// Licensed under the MIT license. See LICENSE file in the project root for
// full license text.

export default function renderXRef(target, counters, editor, next) {
    switch (target.type) {
    case 'exercise':
    case 'exercise_problem':
        return `Exercise ${counters.get('exercise')}`

    case 'exercise_solution': {
        const exercise = counters.get('exercise')
        const solution = counters.get('exercise_solution')
        return `Solution ${exercise}.${solution}`
    }

    case 'exercise_commentary':
        return `Commentary ${counters.get('exercise')}`

    default:
        return next()
    }
}
