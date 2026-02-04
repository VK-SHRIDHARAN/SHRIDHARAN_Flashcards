<<<<<<< HEAD
# Flashcards - Interactive Learning Platform

A modern, responsive flashcard application built with Next.js, React, TypeScript, and Tailwind CSS. Perfect for students and learners who want to master new material efficiently.

**Author:** Shridharan VK (23BCE2086)  
**Last Updated:** February 4, 2026

---

## 🚀 Project Overview

This is a full-featured flashcard learning application featuring:
- **User Authentication** (Login, Signup, Forgot Password)
- **Deck Management** (Create, view, and manage flashcard decks)
- **Multi-level Study** (Easy, Medium, Hard difficulty levels)
- **Interactive Study Mode** (Flip cards, track progress)
- **Responsive Design** (Mobile, tablet, and desktop optimized)
- **Modern UI** (Built with Tailwind CSS and custom components)

---

## 📂 Project Structure

```
Konnichiwow_task/
├── app/
│   ├── (auth)/                          # Authentication routes (route group)
│   │   ├── login/page.tsx               # Login page
│   │   ├── signup/page.tsx              # Sign up page
│   │   └── forgot-password/page.tsx     # Password recovery page
│   ├── (app)/                           # Application routes (route group)
│   │   └── flashcard/
│   │       ├── deck-menu/page.tsx       # Browse and select decks
│   │       ├── levels/page.tsx          # Choose difficulty level
│   │       ├── card/page.tsx            # Study flashcards
│   │       └── deck/page.tsx            # Create/manage decks
│   ├── layout.tsx                       # Root layout
│   ├── page.tsx                         # Home page
│   └── globals.css                      # Global styles
├── components/
│   ├── Auth/
│   │   ├── LoginForm.tsx                # Login form component
│   │   ├── SignupForm.tsx               # Signup form component
│   │   └── ForgotPasswordForm.tsx       # Password reset form
│   └── Flashcard/
│       ├── DeckMenu.tsx                 # Deck selection UI
│       ├── LevelsList.tsx               # Difficulty level selection
│       ├── CardView.tsx                 # Study card display
│       └── DeckManagement.tsx           # Create/edit decks
├── lib/
│   └── types.ts                         # TypeScript type definitions
├── ui/
│   └── index.ts                         # Reusable UI components (tailwind-variants recipes)
├── public/                              # Static assets
├── package.json                         # Project dependencies
└── tsconfig.json                        # TypeScript configuration
```

---

## 🛣️ Routing Guide

### Authentication Routes (No /auth prefix due to route grouping)

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Home page with navigation |
| `/login` | `app/(auth)/login/page.tsx` | User login |
| `/signup` | `app/(auth)/signup/page.tsx` | User registration |
| `/forgot-password` | `app/(auth)/forgot-password/page.tsx` | Password recovery |

### Flashcard Routes

| Route | File | Description |
|-------|------|-------------|
| `/flashcard/deck-menu` | `app/(app)/flashcard/deck-menu/page.tsx` | Browse available decks |
| `/flashcard/levels` | `app/(app)/flashcard/levels/page.tsx` | Select difficulty level (query params: `deckId`, `level`) |
| `/flashcard/card` | `app/(app)/flashcard/card/page.tsx` | Study mode (query params: `deckId`, `level`) |
| `/flashcard/deck` | `app/(app)/flashcard/deck/page.tsx` | Create or manage decks |

---

## 📋 Component Hierarchy

### Authentication Components
- **LoginForm** (`components/Auth/LoginForm.tsx`)
  - Email validation
  - Password validation
  - Error handling
  - Links to signup and forgot password

- **SignupForm** (`components/Auth/SignupForm.tsx`)
  - Full name input
  - Email validation
  - Password strength validation
  - Password confirmation
  - Links to login

- **ForgotPasswordForm** (`components/Auth/ForgotPasswordForm.tsx`)
  - Email verification
  - Success message display
  - Back to login link

### Flashcard Components
- **DeckMenu** (`components/Flashcard/DeckMenu.tsx`)
  - Display all available decks
  - Show card counts and difficulty distribution
  - Navigation to deck levels
  - Create new deck button

- **LevelsList** (`components/Flashcard/LevelsList.tsx`)
  - Display Easy, Medium, Hard difficulty options
  - Show card count per level
  - Navigate to study mode
  - Study all levels option

- **CardView** (`components/Flashcard/CardView.tsx`)
  - Flip card animation
  - Question/Answer display
  - Navigation between cards
  - Progress tracking
  - Correct/Incorrect marking

- **DeckManagement** (`components/Flashcard/DeckManagement.tsx`)
  - Create new flashcard decks
  - Add questions and answers
  - Card list management
  - Save and validate decks

### UI Components (`ui/index.ts`)
Built with `tailwind-variants` for reusable styling:
- **button** - Primary, secondary, ghost, danger variants with multiple sizes
- **input** - Text input with error states and disabled states
- **card** - Default, elevated, and interactive card variants

---

## 🎨 Type Definitions (`lib/types.ts`)

```typescript
// User related
User, LoginCredentials, SignupData, ForgotPasswordData

// Flashcard related
Flashcard, Deck, Level, StudySession
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/SHRIDHARAN_Flashcards.git
   cd SHRIDHARAN_Flashcards
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables (optional):**
   ```bash
   # Create .env.local file if needed for future API integration
   ```

### Running the Project

**Development Mode:**
```bash
npm run dev
```
The application will be available at `http://localhost:3000`

**Production Build:**
```bash
npm run build
npm start
```

**Linting:**
```bash
npm run lint
```

---

## 📱 Features

### ✅ Authentication
- User login with email and password
- User registration with validation
- Password recovery flow
- Form validation and error handling

### 📚 Deck Management
- Browse available flashcard decks
- Create custom flashcard decks
- Add questions and answers
- Organize cards by difficulty level

### 🎯 Study Mode
- View flashcards with question/answer flip
- Track progress with progress bar
- Navigate between cards
- Mark cards as correct/incorrect
- Study by difficulty level
- Support for all levels combined

### 🎨 User Interface
- Responsive design (mobile, tablet, desktop)
- Gradient backgrounds and modern styling
- Interactive hover states and transitions
- Difficulty level color coding (Green=Easy, Amber=Medium, Rose=Hard)
- Loading states and disabled states

### ♿ Accessibility
- Semantic HTML structure
- Proper form labels and associations
- Keyboard navigation support
- Color contrast compliance

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 16.1.4** | React framework with App Router |
| **React 19.2.3** | UI library |
| **TypeScript 5** | Type-safe JavaScript |
| **Tailwind CSS 4** | Utility-first CSS framework |
| **tailwind-variants** | Reusable component recipes |
| **Heroicons** | Icon library (prepared for future use) |
| **Node + npm** | Package management |

---

## 📖 Development Guidelines

### TypeScript Conventions
- **camelCase** for variables, functions, and props
- **PascalCase** for React components and files
- **PascalCase** for interfaces and types
- **UPPER_SNAKE_CASE** for constants only

### Component Structure
- Function components only
- One top-level component per file
- Always type destructured props
- Organize by feature (Auth, Flashcard)

### Layout & Styling
- Flexbox-based layouts using Tailwind utilities
- Responsive modifiers: `md:*`, `lg:*` for breakpoints
- Component recipes via `tailwind-variants`
- Consistent class ordering: layout → sizing → typography → colors → effects

### Git Commits
Follow Conventional Commits format:
```
feat: add new feature
fix: fix a bug
refactor: refactor code
chore: miscellaneous tasks
```

Example:
```bash
git commit -m "feat: implement card flip animation"
git commit -m "fix(login): prevent submit on empty password"
```

---

## 🧪 Mock Data

The application includes mock data for demonstration:
- **3 Sample Decks:** Japanese Hiragana, Japanese Katakana, Basic Kanji
- **Multiple Cards per Deck:** Ranging from 12-20 cards
- **Difficulty Distribution:** Easy, Medium, and Hard cards in each deck
- **Study Sessions:** Track correct answers and progress

---

## 🚀 Deployment

To deploy this project, you can use:

1. **Vercel** (recommended for Next.js)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Other platforms:** Docker, Netlify, AWS, etc.

---

## 📝 Commit History

The project follows a logical commit structure:

1. `feat: add type definitions for user, flashcard, and deck`
2. `feat: add reusable UI component recipes using tailwind-variants`
3. `feat: implement authentication components (login, signup, forgot-password)`
4. `feat: add authentication pages (login, signup, forgot-password)`
5. `feat: implement flashcard components (deck menu, levels, card view, deck management)`
6. `feat: add flashcard pages (deck-menu, levels, card, deck)`
7. `feat: update home page and install required dependencies`

---

## 🔄 Future Enhancements

- Backend API integration for data persistence
- User authentication with JWT tokens
- Database storage for decks and progress
- Quiz results analytics and statistics
- Spaced repetition algorithm
- Dark mode support
- Export/Import deck functionality
- Collaborative decks
- Mobile app version

---

## 📄 License

MIT License - Feel free to use this project as a learning resource.

---

## 👤 Author

**Shridharan VK**  
Roll: 23BCE2086

---

## 📞 Support

For questions or issues, please refer to the [Next.js Documentation](https://nextjs.org/docs) or [Tailwind CSS Documentation](https://tailwindcss.com/docs).

---

## ✨ Highlights

- ✅ All pages implemented and routed correctly
- ✅ TypeScript for type safety throughout
- ✅ Responsive design following Figma specifications
- ✅ Reusable component recipes with tailwind-variants
- ✅ Form validation and error handling
- ✅ Mock data for demonstration
- ✅ Clean, documented code with proper commits
- ✅ Follows all development guidelines from the task description
=======
# SHRIDHARAN_Flashcards
>>>>>>> 9fe195b078ae7f9378df78c30b114f7de896f8d0
