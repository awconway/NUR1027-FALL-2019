import React from 'react'
import rehypeReact from 'rehype-react'

import Result from './components/result'
import Exercise from './components/exercise'
import CodeBlock from './components/code'
import { Link } from './components/link'
import Slides from './components/slides'
import Choice, { Option } from './components/choice'
import { H3, Hr, Ol, Ul, Li, InlineCode } from './components/typography'
import { qu } from './components/qu'

export const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
        result: Result,
        exercise: Exercise,
        slides: Slides,
        codeblock: CodeBlock,
        choice: Choice,
        opt: Option,
        a: Link,
        hr: Hr,
        h3: H3,
        ol: Ol,
        ul: Ul,
        li: Li,
        code: InlineCode,
        qu: qu,
    },
}).Compiler
