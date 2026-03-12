# Raycast Extension Development Guide

## Language Policy

**US English only.** All user-facing text, code comments, commit messages, PR descriptions, and documentation must be written in US English. No Japanese or other non-English text anywhere in the codebase.

## Available Commands

```bash
npm run dev        # Start development mode (opens in Raycast)
npm run build      # Build the extension
npm run lint       # Run ESLint checks
npm run fix-lint   # Auto-fix ESLint issues
```

## Project Structure

```
src/           TypeScript/React source files
assets/        Icons and images (PNG, 512x512 for extension icon)
package.json   Raycast manifest, dependencies, and command definitions
```

## Raycast API Patterns

### Toast for User Feedback

```tsx
import { showToast, Toast } from "@raycast/api";

// Success
await showToast({ style: Toast.Style.Success, title: "Done", message: "Operation completed" });

// Error handling
try {
  // ...
} catch (error) {
  await showToast({
    style: Toast.Style.Failure,
    title: "Error",
    message: error instanceof Error ? error.message : "An unexpected error occurred",
  });
}
```

### Navigation After Action

```tsx
import { popToRoot, showHUD } from "@raycast/api";

// Copy → HUD → pop back to root
await Clipboard.copy(text);
await showHUD("Copied to clipboard");
await popToRoot();
```

### Loading State

Always use `isLoading` prop on List/Grid/Form components during async operations.

## Code Style

- **Prettier**: `printWidth: 120`, `singleQuote: false` (see `.prettierrc`)
- **ESLint**: Uses `@raycast/eslint-config` (flat config in `eslint.config.js`)
- Run `npm run lint` before committing

## Testing

Raycast extensions do not have a built-in test framework. For complex logic, extract pure functions into separate modules and test with vitest.

## Submission Checklist

- [ ] All text is in US English
- [ ] `npm run build` succeeds
- [ ] `npm run lint` passes with no errors
- [ ] Extension icon is 512x512 PNG
- [ ] Screenshots are 2000x1250px (16:10 aspect ratio) in English
- [ ] `package.json` has valid `author`, `categories`, and `license: "MIT"`
- [ ] CHANGELOG.md is updated
