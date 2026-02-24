# Copilot Instructions

## Core Principles

### DRY (Don't Repeat Yourself)

- **Never duplicate logic.** Extract repeated code into reusable functions, components, hooks, or utilities.
- Before writing new code, check if similar logic already exists in the codebase — reuse or extend it.
- Shared constants, types, and helpers belong in `lib/` or dedicated shared modules.
- If the same pattern appears more than once, abstract it immediately.

### Code Reusability

- Build components to be **composable and generic** — avoid hardcoding values that could be props or configuration.
- Use custom hooks (`lib/hooks/`) to encapsulate reusable stateful logic.
- Prefer utility functions in `lib/utils.ts` over inline logic repeated across files.
- Design UI components (`components/ui/`) as self-contained, reusable building blocks that section components (`components/sections/`) consume.
- Use TypeScript interfaces/types to enforce consistent contracts across reusable code.
- Favor composition over inheritance — combine small, focused components rather than building monolithic ones.

## Skills

**Always read and follow the project skills before writing or modifying code.** Skills contain domain-specific best practices and must be applied on every task.

| Skill | When to Apply |
| --- | --- |
| `next-best-practices` | Any Next.js file conventions, RSC boundaries, data fetching, metadata, routing, image/font optimization |
| `ui-ux-pro-max` | Any UI/UX work — components, styling, layout, accessibility, animations, color, typography |
| `vercel-react-best-practices` | Writing, reviewing, or refactoring React/Next.js code for performance |
| `web-design-guidelines` | UI reviews, accessibility audits, design compliance checks |

> **Rule:** Before starting any task, load the relevant skill file(s) and strictly follow their guidelines. Do not skip this step.
