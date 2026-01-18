# AGENT CODING GUIDELINES & CHEAT SHEET

This document outlines the operational commands, coding conventions, and style rules for agents contributing to the `fdm-2026` codebase. All changes must strictly adhere to these guidelines and must pass all required checks (`format`, `check`, `test`) before a task is considered complete.

---

## 1. PROJECT COMMANDS & VERIFICATION

### A. Core Workflow Commands

| Task | Command | Description |
| :--- | :--- | :--- |
| **Development Server** | `npm run dev` | Starts the local dev server on port 3000 (Vite). Use this only for visual inspection or manual testing. |
| **Full Production Build** | `npm run build` | Compiles the project for production deployment. Must run successfully before task completion. |
| **Type Check / Lint** | `npm run check` | Runs all static analysis, type checking, and linter rules (Biome/TypeScript). This is the primary code quality gate. |
| **Lint Only** | `npm run lint` | Runs the Biome linter rules. |
| **Format Code** | `npm run format` | Automatically formats all code using Biome. This command must be executed after every code modification. |

### B. Testing

The project uses **Vitest** for testing (integrated with `npm run test`).

| Task | Command | Description |
| :--- | :--- | :--- |
| **Run All Tests** | `npm run test` | Executes all tests once in a non-watch mode (`vitest run`). |
| **Run Single Test File** | `npm run test -- <path/to/file.test.ts>` | Executes tests only within a specific file. Use this for targeted verification. |
| **Run Tests in Watch Mode** | `vitest` | Start Vitest in interactive watch mode for rapid development cycles. |

> **Verification Mandate:** Agents must run `npm run format`, then `npm run check` after every code change. If the change modifies application logic, adds a feature, or fixes a bug, `npm run test` must also be executed and pass.

---

## 2. CODE STYLE & CONVENTIONS

The project is built on **React**, **TypeScript (Strict Mode)**, and **Tailwind CSS**. Code consistency is enforced by **Biome**.

### A. Language and Typing (TypeScript)

*   **Strict Mode:** The `tsconfig.json` enforces `strict: true`. All functions, variables, and components must be strongly typed. Avoid the `any` type; prefer specific types or generic constraints.
*   **Unused Items:** Do not introduce or leave behind unused variables, function parameters, or imports. Biome/TypeScript rules (`noUnusedLocals`, `noUnusedParameters`) are enabled and will cause checks to fail.
*   **Fallthrough Cases:** Do not use fallthrough cases in `switch` statements (`noFallthroughCasesInSwitch`).
*   **File Extensions:** Use `.tsx` for files containing JSX/React components and `.ts` for pure utility/logic files.

### B. Naming Conventions

Adhere to the established casing conventions across the codebase:

| Entity | Convention | Example |
| :--- | :--- | :--- |
| **Components/Interfaces/Types** | `PascalCase` | `SettingsDrawer`, `UserProps`, `FetchState` |
| **Variables/Functions** | `camelCase` | `isMenuOpen`, `getSettings`, `cn` |
| **Files (Components)** | `PascalCase` | `Button.tsx`, `Layout.tsx` |
| **Files (Utilities/Non-Components)** | `camelCase` | `router.tsx`, `utils.ts` |
| **Folders** | `Kebab-case` or `Lowercase` | `src/components`, `src/lib`, `src/routes` |

### C. Formatting & Biome Rules

Biome is the single source of truth for code formatting.

*   **Indentation:** Use **Tabs** for indentation.
*   **Quotes:** Use **Double Quotes** (`""`) for all string literals in JavaScript, TypeScript, and JSX.
*   **Automatic Formatting:** The `npm run format` command will automatically resolve most issues (e.g., parentheses, semicolons, spacing). Rely on this tool heavily.

### D. Imports

*   **Path Aliases:** All imports originating from the `src` root directory *must* use the `@/` path alias. Relative imports (`../../`) should be reserved for within a close module only.
    *   **Correct:** `import { utils } from '@/lib/utils'`
    *   **Incorrect:** `import { utils } from '../lib/utils'`
*   **Organization:** Imports must be automatically organized, sorted, and separated into groups by Biome (via `organizeImports: "on"`).

### E. React Component Structure

*   **Style:** Use modern **Functional Components** defined with standard `function` syntax.
*   **Styling:** Use **Tailwind CSS**. Prefer using the project's utility function (usually `cn` found in `src/lib/utils.ts`) for merging and conditionally applying classes.
*   **Exports:** The main component in a file should use `export default`.

### F. Error Handling

*   **Synchronous Code:** Use standard `try...catch` blocks for all synchronous operations that may throw errors (e.g., parsing, validation).
*   **Asynchronous Code:** Utilize the built-in error handling and state management of libraries like TanStack Router and TanStack Query (if used) to surface errors via dedicated error boundaries or data states. Only use manual `try...catch` if specific cleanup or side-effects are necessary upon failure.

---

## 3. AGENT-SPECIFIC DIRECTIVES (None Found)

No pre-existing configuration files (`.cursor/rules/`, `.github/copilot-instructions.md`, etc.) were found to specify additional agent behavior. Therefore, agents must strictly follow the technical conventions outlined above and the general operational guidelines for the opencode agent.

---
## AGENT CHECKLIST

Always check these items before concluding a task:

1.  [ ] Did I use **Tabs** for indentation and **Double Quotes**?
2.  [ ] Did I use **PascalCase** for components/types and **camelCase** for functions/variables?
3.  [ ] Did I use the **@/** path alias for `src/` directory imports?
4.  [ ] Is the code **strictly typed** and free of implicit `any`?
5.  [ ] Are there **no unused imports, variables, or parameters**?
6.  [ ] Have I executed `npm run format`?
7.  [ ] Have I executed `npm run check` (Type Check and Lint)?
8.  [ ] If I modified logic, have I executed `npm run test`?
