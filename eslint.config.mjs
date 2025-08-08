import {dirname} from 'path'
import {fileURLToPath} from 'url'
import {FlatCompat} from '@eslint/eslintrc'

import eslintPluginTypescript from '@typescript-eslint/eslint-plugin'
import eslintPluginReact from 'eslint-plugin-react'
// import eslintPluginTailwindcss from 'eslint-plugin-tailwindcss'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname
})

const rules = [
    {
        ignores: [
            'node_modules',
            'prisma/src/**',
            '.next',
            '.idea'
        ]
    },

    ...compat.extends('next/core-web-vitals', 'next/typescript'),

    {
        plugins: {
            '@typescript-eslint': eslintPluginTypescript,
            react: eslintPluginReact
            // tailwindcss: eslintPluginTailwindcss
        },
        rules: {
            '@typescript-eslint/no-unused-expressions': 'error',
            '@typescript-eslint/no-explicit-any': 'error',
            'react/no-unescaped-entities': 'error'
            // 'tailwindcss/classnames-order': 'error'
        }
    }
]

export default rules
