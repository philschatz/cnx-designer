import fs from 'fs'
import { basename, extname, resolve } from 'path'
import { KeyUtils } from 'slate'

export default function fixtures(...args) {
    const fn = args.pop()

    const path = resolve(...args)
    const files = fs.readdirSync(path)
    const name = basename(path)

    describe(name, () => {
        for (const file of files) {
            const p = resolve(path, file)
            const stat = fs.statSync(p)

            if (stat.isDirectory()) {
                fixtures(path, file, fn)
                continue
            }

            const name = basename(file, extname(file))

            // This needs to be a non-arrow function to use `this.skip()`.
            it(name, function runTest() {
                // Ensure that the key generator is reset. We have to do this
                // here because the `require` call will create
                // the Slate objects.
                KeyUtils.resetGenerator()
                const module = require(p)

                if (module.skip) {
                    this.skip()
                    return
                }

                fn(module)
            })
        }
    })
}
