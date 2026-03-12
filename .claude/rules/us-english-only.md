---
description: Enforce US English only policy across all files
globs: "**/*"
---

# US English Only

All text in this repository MUST be in US English. This is a hard requirement from the Raycast Store.

## What this covers

- `package.json`: `title`, `description`, preference labels, command names
- Source code: all string literals, comments, JSDoc, error messages
- Documentation: README.md, CHANGELOG.md, PR descriptions, commit messages
- Screenshots and metadata: all visible text must be in English

## What is NOT allowed

- Japanese or any non-English text anywhere in the codebase
- Custom i18n/localization systems (e.g., `translations.ts`, language preferences)
- Bilingual text (e.g., "退勤時間 / Leave Time")

## If locale-dependent behavior is needed

Use Raycast's preferences API for user-configurable options (e.g., 12h/24h time format), NOT a language switcher.
