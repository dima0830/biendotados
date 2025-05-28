import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  js.configs.recommended,
  ...vue.configs['flat/recommended'],
  prettierConfig,
  {
    files: ['**/*.{js,ts,vue}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly'
      }
    },
    plugins: {
      prettier
    },
    rules: {
      // Prettier
      'prettier/prettier': 'error',

      // Vue
      'vue/multi-word-component-names': 'off',
      'vue/no-multiple-template-root': 'off',

      // General
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-undef': 'off'
    }
  },
  {
    ignores: ['node_modules/', '.nuxt/', 'dist/', '.output/', 'coverage/']
  }
]
