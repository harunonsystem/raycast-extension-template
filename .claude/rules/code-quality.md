---
description: Code quality rules based on Raycast Store review feedback
globs: "src/**/*"
---

# Code Quality Rules

## No empty files

Do NOT create empty or placeholder files (e.g., empty `types.ts`). Only create files when they have actual content. If a types file has no types yet, don't create it.

## No `any` type

Use proper TypeScript interfaces and types. Never use `any` — define explicit interfaces for all data structures.

## No `console.log`

Do not leave `console.log` in production code. Use `showToast` for user-facing feedback and remove debug logging before committing.

## Error handling

Always handle errors with user-friendly Toast messages:

```tsx
try {
  // operation
} catch (error) {
  await showToast({
    style: Toast.Style.Failure,
    title: "Error",
    message: error instanceof Error ? error.message : "An unexpected error occurred",
  });
}
```

## Prettier and ESLint

- Prettier config (`printWidth: 120`, `singleQuote: false`) is mandatory — do NOT modify `.prettierrc`
- Run `npm run lint` before every commit
- Run `npm run fix-lint` to auto-fix formatting issues
