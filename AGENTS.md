# Agent Guidance for Raycast Extension Development

## Stack

- **Language**: TypeScript (strict mode)
- **UI Framework**: React via `@raycast/api`
- **Utilities**: `@raycast/utils` (hooks for fetching, caching, etc.)
- **Linting**: ESLint with `@raycast/eslint-config` (flat config)
- **Formatting**: Prettier (`printWidth: 120`, `singleQuote: false`)
- **CI**: GitHub Actions runs build + lint on every PR

## UX Patterns

- **Copy actions**: `Clipboard.copy(text)` → `showHUD("Copied to clipboard")` → `popToRoot()`
- **Loading states**: Always set `isLoading` on List/Grid/Form during async work
- **Error handling**: Use `showToast({ style: Toast.Style.Failure, ... })` with descriptive messages
- **Navigation**: Use `push()` for drilling down, `popToRoot()` for returning to Raycast search
- **Keyboard shortcuts**: Use standard Raycast shortcuts from `@raycast/api` (e.g., `Keyboard.Shortcut.Common.Copy`)

## Review

Use the `reviewer` agent (`.claude/agents/reviewer.md`) before submitting to check for common issues caught in past Raycast Store reviews.
