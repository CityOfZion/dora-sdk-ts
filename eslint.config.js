import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import typescriptEslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default defineConfig(
  { ignores: ['dist', 'node_modules', 'docs'] },
  js.configs.recommended,
  typescriptEslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
)
