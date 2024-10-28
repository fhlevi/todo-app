# Todo App React + Vite

[React.js](https://react.dev/) 
[Vite](https://vitejs.dev/) 

[Demo](https://todo-alpha-list.vercel.app/)

## Getting Started

1. Clone this repo.
2. Run `npm install` to install dependencies.
3. Run `npm run dev`.

## Scripts

- `npm run dev` - Run in development mode
- `npm run build` - Build the application for production

## File Structure

```raw
.
├── 📂 app
├── 📂 components/
│   ├── * atoms
│   ├── * molecules
│   └── * organisms
├── 📂 hooks
├── 📂 public
├── 📂 styles
├── 📂 types
├── 📂 utils
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── main.tsx
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite-env.d.ts
└── vite.config.ts

Notes:
📂: Folder
⚛️: related folder
```

## File & Folder Naming

- In general, **kebab-case** is prefered for folder & file naming.
- Use **kebab-case** and **.js** extension for react component file naming.  
  You can create component file directly like `some-component.js`, or create a folder `some-component/index.js`.
- Use **kebab-case** and **.spec.js** for test file naming.

## Tools

- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Component**: [Redix UI](https://www.radix-ui.com/primitives/docs/overview/introduction)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **className Utility**: [clsx](https://www.npmjs.com/package/clsx)
- **TypeScript Utility**: [Zod](https://zod.dev/?id=installation)

## Naming Conventions

- **Variable Name:**
  - Should be camelCase.
  - For boolean variable, use "is", "can", or "has" prefix.  
    Example: `isExpired`, `isDeleted`, `canEditSomething`, `hasSomething`.
- **Function Name:**
  - Should be camelCase.
  - Should starts with verb 1, and don't abbreviate that verb.  
    ✅ Correct example: `createAccount`, `validateForm`  
    ❌ Incorrect example: `creatingAccount`, `vldtForm`
  - For event-handler function, you can use "on" or "handle" prefix.  
    Example: `onScroll`, `handleScroll`, `onSave`, `handleSave`
  - For utility function, it is okay for not using verb 1 prefix.  
    Example: `numeral(...)`, `tooltip(...)`
- **React Component Name:**
  - Should be PascalCase.
  - Page component (components in `app/` folder) name should ends with Page.  
    Example: `HomePage`.
  - Higher-Order Component should have "with" prefix.  
    Example: `withAuth`, `withErrorBoundary`.

