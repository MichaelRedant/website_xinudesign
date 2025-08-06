# AGENTS

## Project guidelines

- Source code is written in [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/).
- Place React components in `src/components` and name files with PascalCase (e.g. `MyComponent.tsx`).
- Use Tailwind CSS utility classes for styling.
- Use 2 spaces for indentation. Avoid using `any` when typing.
- Prefer functional React components and default exports when there is a single component per file.

## Before committing

1. Format all files: `npm run format` (or `npm run format:write` to apply fixes).
2. Lint the project: `npm run lint`.
3. Ensure the app builds: `npm run build`.

These checks help keep the repository consistent and catch issues early.
