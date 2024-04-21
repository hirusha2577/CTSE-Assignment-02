import globals from 'globals'
import path from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import pluginJs from '@eslint/js'

// mimic CommonJS variables -- not needed if using CommonJS
const _FILENAME = fileURLToPath( import.meta.url )
const _DRINAME = path.dirname( _FILENAME )
const compat = new FlatCompat( { baseDirectory: _DRINAME, recommendedConfig: pluginJs.configs.recommended } )

export default [
  { languageOptions: { globals: globals.browser } },
  ...compat.extends( 'standard-with-typescript' )
]
