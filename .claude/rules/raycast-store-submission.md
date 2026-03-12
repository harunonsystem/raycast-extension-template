---
description: Raycast Store submission requirements and checklist
globs: "**/*"
---

# Raycast Store Submission Rules

## package.json requirements

- `author`: Must be a valid Raycast Store username (validated against Raycast API)
- `license`: Must be `"MIT"`
- `categories`: Must use valid Raycast categories
- `icon`: Must reference a 512x512 PNG file in `assets/`
- `title`: Title Case following Apple Style Guide
- All text in US English

## Screenshots (metadata/)

- Resolution: 2000x1250px (16:10 aspect ratio)
- All visible text must be in English
- No Japanese or other non-English text in screenshots

## Documentation consistency

- CLAUDE.md, AGENTS.md, and README.md must NOT reference files or commands that don't exist
- Keep documentation in sync when adding/removing files or changing scripts

## Before submitting

1. `npm run build` must succeed
2. `npm run lint` must pass with zero errors
3. No empty files in the repository
4. CHANGELOG.md must be updated
