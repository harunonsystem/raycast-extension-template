# Agent Guidance for Raycast Extension Development

## Stack

- **Language**: TypeScript (strict mode)
- **UI Framework**: React via `@raycast/api`
- **Utilities**: `@raycast/utils` (hooks for fetching, caching, etc.)
- **Linting**: ESLint with `@raycast/eslint-config`
- **Formatting**: Prettier (`printWidth: 120`, `singleQuote: false`)

## UX Patterns

- **Copy actions**: `Clipboard.copy(text)` → `showHUD("Copied to clipboard")` → `popToRoot()`
- **Loading states**: Always set `isLoading` on List/Grid/Form during async work
- **Error handling**: Use `showToast({ style: Toast.Style.Failure, ... })` with descriptive messages
- **Navigation**: Use `push()` for drilling down, `popToRoot()` for returning to Raycast search
- **Keyboard shortcuts**: Use standard Raycast shortcuts from `@raycast/api` (e.g., `Keyboard.Shortcut.Common.Copy`)

## DO

- Write all text, comments, and documentation in US English
- Use `@raycast/utils` hooks (`useFetch`, `useExec`, `useCachedState`) when applicable
- Extract complex business logic into pure functions for testability
- Handle all error paths with user-friendly Toast messages
- Use TypeScript strict mode and define interfaces for data structures

## DON'T

- Do NOT use Japanese or any non-English text anywhere in the codebase
- Do NOT implement custom i18n or localization (Raycast does not support it)
- Do NOT create empty files (e.g., empty `types.ts`) — only create files when they have content
- Do NOT reference files or commands that do not exist in CLAUDE.md or AGENTS.md
- Do NOT use `any` type — define proper interfaces
- Do NOT leave `console.log` in production code (use `showToast` for user feedback)
