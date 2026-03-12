# My Extension

A Raycast extension built from [raycast-extension-template](https://github.com/harunonsystem/raycast-extension-template).

## Getting Started

1. Click **"Use this template"** on GitHub to create your repository
2. Clone your new repository
3. Install dependencies:
   ```bash
   npm install
   ```
4. Update `package.json`:
   - `name`: Your extension's unique identifier
   - `title`: Display name in Raycast
   - `description`: What your extension does
   - `author`: Your Raycast Store username
   - `icon`: Replace `assets/command-icon.png` with your 512x512 PNG icon
5. Start developing:
   ```bash
   npm run dev
   ```

## Development

| Command | Description |
| --- | --- |
| `npm run dev` | Start development mode (opens in Raycast) |
| `npm run build` | Build the extension |
| `npm run lint` | Run ESLint checks |
| `npm run fix-lint` | Auto-fix ESLint issues |

## Raycast Store Submission Checklist

Before submitting a PR to the [raycast/extensions](https://github.com/raycast/extensions) repository:

- [ ] All user-facing text is in US English (no Japanese or other languages)
- [ ] `npm run build` succeeds without errors
- [ ] `npm run lint` passes without errors
- [ ] Extension icon is a 512x512 PNG file
- [ ] Screenshots are 2000x1250px (16:10 aspect ratio) and in English
- [ ] `package.json` has valid `author`, `categories`, and `license: "MIT"`
- [ ] CHANGELOG.md is updated with your changes
- [ ] README.md describes what the extension does and how to use it
- [ ] No empty files in the repository
- [ ] No references to non-existent files or commands in documentation
- [ ] `.prettierrc` is configured with `printWidth: 120` and `singleQuote: false`
