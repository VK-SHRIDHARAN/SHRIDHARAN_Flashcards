# 1. Tech Stack and Scope

- **Frontend only**
  - This repo contains only the frontend.
- **Language & runtime**
  - React with **TSX**.
  - Node + **npm** as the package manager.
  - **Next.js App Router** for file-based routing (automatic route generation).
- **Styling**
  - **Tailwind CSS** for all styling.
  - Layouts must use **flexbox** (`flex`, `flex-col`, `flex-row`, `items-*`, `justify-*`, `gap-*`) plus responsive modifiers like `md:*`.
- **Icons**
  - **Heroicons only**: `@heroicons/react/24/outline` and `@heroicons/react/24/solid`.
- **UI Primitives**
  - **`tailwind-variants`** for reusable class recipes (Button, Input, Card).
- **Design**
  - Visual design (colors, type, spacing) is provided in Figma.

---

# 2. Project Structure

You can add components if needed. Consult before removing.

```
app/
  (auth)/
    login/
      page.tsx
    signup/
      page.tsx
    forgot-password/
      page.tsx
  
  (app)/
    flashcard/
      deck-menu/
        page.tsx
      deck/
        page.tsx
      card/
        page.tsx
      levels/
        page.tsx

components/
  Auth/
    LoginForm.tsx
    SignupForm.tsx
    ForgotPasswordForm.tsx
  Flashcard/
    DeckMenu.tsx
    LevelsList.tsx
    CardView.tsx
    DeckManagement.tsx

ui/
  button.ts
  input.ts
  card.ts

lib/
  types.ts
```

---

# 3. Routing Setup (Next.js App Router)

Routes are **automatically generated** from folder structure. No manual route configuration needed.

## Route Groups

Use parentheses to group routes without affecting URL:
- `(auth)/login/page.tsx` → `/login` (not `/auth/login`)
- `(app)/flashcard/deck/page.tsx` → `/flashcard/deck`

---

# 4. Access Dynamic Params

Dynamic segments in URLs use square brackets (e.g., `[lessonId]`, `[deckId]`). Pages using dynamic params should properly wire the route segments to display the correct content based on the URL parameters.

---

# 5. Server vs Client Components

## Rule of Thumb

| Need | Use |
|------|-----|
| Display static content | **Server Component** |
| Use hooks (`useState`, `useEffect`) | **`'use client'`** |
| Event handlers (`onClick`, `onChange`) | **`'use client'`** |
| Browser APIs | **`'use client'`** |
| Real-time interactivity | **`'use client'`** |

---

# 6. Type Definitions

Create reusable types in `lib/types.ts`. Define interfaces for domain objects such as:
- User (id, name, email, profile data)
- Flashcard (id, question, answer, difficulty)
- Deck (id, title, description, cards)
- Auth-related types (login credentials, signup data)

All component props and shared data structures should be typed.

---

# 7. Component Props

Always type component props clearly. Each component should have well-defined prop interfaces that describe:
- Required vs optional props
- Data types for each prop
- Callback functions if needed

---

# 8. TypeScript Naming

Follow these naming conventions:
- **camelCase** for variables, functions, props, and hooks
- **PascalCase** for React components and their files
- **PascalCase** for TypeScript interfaces and types
- **UPPER_SNAKE_CASE** only for true constants

---

# 9. Components

- Use function components only
- One top-level component per file; filename matches component name
- Always type destructured props
- Organize components by feature (Auth, Flashcard)
- Create reusable, presentational components

---

# 10. Layout & Responsiveness

Global pattern: Use **flexbox for all layout**.

Key guidelines:
- Use `flex`, `flex-col`, `flex-row`, `items-*`, `justify-*`, `gap-*` utilities
- Apply responsive modifiers: `flex-col md:flex-row`, `w-full md:w-1/2`
- Avoid fixed widths/heights; prefer `w-full`, `max-w-*`, `flex-1`
- Use `gap-*` for spacing between flex children

---

# 11. Tailwind Usage & `tailwind-variants`

Define reusable **class recipes** using `tailwind-variants` for UI primitives (Button, Input, Card).

**Tailwind Class Ordering** (keep consistent):
1. Layout: `flex flex-col items-center justify-between`
2. Sizing & spacing: `w-full h-10 px-4 py-2 gap-2`
3. Typography: `text-sm font-medium`
4. Colors & borders: `bg-indigo-600 text-white border border-slate-700`
5. Effects & states: `shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2`

Create recipes for reusable components in the `ui/` folder instead of large wrapper components.

---

# 12. Animations

Use **tailwindcss-motions** utilities combined with Tailwind's `transition-*` utilities for animations and transitions.

Apply animations for:
- Page/component entrance effects
- Hover and active states
- Subtle transitions between states
- Interactive feedback

Keep animations smooth and purposeful.

---

# 13. Authentication Section

The Authentication section includes three main pages:

- **Login Page** (`/login`)
- **Signup Page** (`/signup`)
- **Forgot Password Page** (`/forgot-password`)

---

# 14. Flashcards Section

The Flashcards section includes interactive learning pages:

- **Deck Menu Page** (`/flashcard/deck-menu`)
- **Levels Selection Page** (`/flashcard/levels`)
- **Flashcard Study Page** (`/flashcard/card`)
- **Flashcard Deck Management Page** (`/flashcard/deck`)

---

# 15. Figma Design

All UI components and pages should be designed according to the provided Figma design system.

Refer to the Figma link for:
- Component library and specifications
- Color system and typography
- Spacing and layout guidelines
- Visual hierarchy

Copy components from figma as png/svg to use them as well if necessary

---

# 11. Git Commit Conventions (Conventional Commits)

## Commit Conventions
Follow **Conventional Commits** strictly for all commit messages.

Format:

```txt
<type>(<optional scope>): <description>

[optional body]

[optional footer]
```

Common types:

- `feat` – add/update/remove a user-facing or API feature.
- `fix` – bug fix.
- `refactor` – code change without behavior change.
- `chore` – misc tasks (last resort).

Examples:

```txt
feat: add quiz submission flow
fix(login): prevent submit on empty password
refactor: extract lesson overview header
```

Cheatsheet:  
https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13

---
## Commits

- Commit atleast after every page has been made
- Commit history will be checked


---
# 17. Documentation Links

- **Next.js App Router Docs**: https://nextjs.org/docs/app
- **Next.js Server Components**: https://nextjs.org/docs/app/building-your-application/rendering/server-components
- **Next.js Client Components**: https://nextjs.org/docs/app/building-your-application/rendering/client-components
- **TypeScript Handbook**: https://www.typescriptlang.org/docs/
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Tailwind motions Docs** (tailwindcss-motions): https://docs.rombo.co/tailwind
- **Tailwind CSS Extend Theme**: https://tailwindcss.com/docs/theme#extending-the-default-theme
- **tailwind-variants Docs**: https://www.tailwind-variants.org/docs/getting-started
- **Heroicons Docs**: https://heroicons.com/
- **Conventional Commits Cheatsheet**: https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13

---
# 18. Brownie Points
- Implement mobile view as given in figma
- Use an example json file to take inputs from
