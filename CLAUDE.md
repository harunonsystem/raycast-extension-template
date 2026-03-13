# Raycast Extension Development Guide

## Available Commands

```bash
npm run dev        # Start development mode (opens in Raycast)
npm run build      # Build the extension
npm run lint       # Run ESLint checks
npm run fix-lint   # Auto-fix ESLint issues
```

## Project Structure

```
src/               TypeScript/React source files
assets/            Icons and images (PNG, 512x512 for extension icon)
package.json       Raycast manifest, dependencies, and command definitions
eslint.config.js   ESLint flat config (@raycast/eslint-config)
.prettierrc        Prettier config (printWidth: 120, singleQuote: false)
```

## Raycast API Patterns

### Toast for User Feedback

```tsx
import { showToast, Toast } from "@raycast/api";

await showToast({ style: Toast.Style.Success, title: "Done", message: "Operation completed" });

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
import { Clipboard, popToRoot, showHUD } from "@raycast/api";

await Clipboard.copy(text);
await showHUD("Copied to clipboard");
await popToRoot();
```

### Loading State

Always use `isLoading` prop on List/Grid/Form components during async operations.

## Testing

Raycast extensions do not have a built-in test framework. For complex logic, extract pure functions into separate modules and test with vitest.
