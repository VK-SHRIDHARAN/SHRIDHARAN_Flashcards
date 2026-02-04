# Flashcards - Interactive Learning Platform

A modern flashcard app I built for learning languages and other subjects. It's responsive, works smoothly on mobile and desktop, and has all the features you'd need to actually study with flashcards.

**Built by:** Shridharan VK (Roll: 23BCE2086)  
**Last Updated:** February 4, 2026

---

## 🚀 What's Inside?

This is a complete flashcard application with some cool features:

- **User Auth** - Create an account, log in, reset your password if you forget it
- **Deck Management** - Create your own decks or browse existing ones with flashcards
- **Study Levels** - Practice easy, medium, or hard questions (or mix them all)
- **Flip & Learn** - Classic flashcard flip animation, track your progress as you study
- **Mobile Friendly** - Works great on phones, tablets, and laptops
- **Clean Design** - Built with modern styling and smooth interactions

---

## 📂 Project Structure

```
Konnichiwow_task/
├── app/
│   ├── (auth)/                          # Login, signup, password reset
│   │   ├── login/page.tsx               
│   │   ├── signup/page.tsx              
│   │   └── forgot-password/page.tsx     
│   ├── (app)/                           # Main app routes
│   │   └── flashcard/
│   │       ├── deck-menu/page.tsx       # Pick a deck
│   │       ├── levels/page.tsx          # Choose difficulty
│   │       ├── card/page.tsx            # Study mode
│   │       └── deck/page.tsx            # Create decks
│   ├── layout.tsx                       # Main layout wrapper
│   ├── page.tsx                         # Home page
│   └── globals.css                      # Global styles
├── components/
│   ├── Auth/
│   │   ├── LoginForm.tsx                
│   │   ├── SignupForm.tsx               
│   │   └── ForgotPasswordForm.tsx       
│   └── Flashcard/
│       ├── DeckMenu.tsx                 
│       ├── LevelsList.tsx               
│       ├── CardView.tsx                 # The flip card
│       └── DeckManagement.tsx           
├── lib/
│   └── types.ts                         # TypeScript types
├── ui/
│   └── index.ts                         # Reusable UI components
├── public/                              # Images, fonts, etc
├── package.json                         
└── tsconfig.json                        
```

---

## 🛣️ How to Navigate

The app has different sections for auth (login/signup) and the main flashcard app.

| Route | What happens |
|-------|-------------|
| `/` | Home page with intro & demo button |
| `/login` | Sign in with email & password |
| `/signup` | Create new account |
| `/forgot-password` | Reset your password |
| `/flashcard/deck-menu` | See all your decks |
| `/flashcard/levels` | Pick difficulty (easy, medium, hard) |
| `/flashcard/card` | Study your cards! |
| `/flashcard/deck` | Create a new deck |

---

## 🎨 Main Components

**Auth Pages:**
- LoginForm - Email & password login with validation
- SignupForm - Create account with name, email, password confirmation
- ForgotPasswordForm - Email verification for password reset

**Flashcard Pages:**
- DeckMenu - Browse available decks, see how many cards each one has
- LevelsList - Pick your difficulty: easy, medium, or hard cards
- CardView - The main study page with flip animation, progress tracking
- DeckManagement - Create new decks and add your own Q&A cards

**UI Components:**
Built with `tailwind-variants` for consistent styling. All buttons, inputs, and cards use these base recipes with different variants.

---

## 🚀 How to Run This

### What You Need First
- Node.js (version 18 or higher)
- npm (comes with Node)
- Git (if you want to clone the repo)

### Step 1: Get the Code

```bash
# Clone the repo
git clone https://github.com/VK-SHRIDHARAN/SHRIDHARAN_Flashcards.git

# Go into the folder
cd SHRIDHARAN_Flashcards
```

### Step 2: Install Dependencies

```bash
npm install
```

This grabs all the libraries the app needs. It'll take a minute or two.

### Step 3: Run It Locally

```bash
npm run dev
```

Once it starts, open your browser and go to `http://localhost:3000`. The app will be running there!

### Step 4: Start Using It

- Click "Sign Up" to create an account
- Browse decks or try the demo first
- Pick a difficulty level and start studying!

### Other Commands You Might Need

**Build for production:**
```bash
npm run build
npm start
```

**Check for code issues:**
```bash
npm run lint
```

---

## 📱 What This App Can Do

**Sign Up & Log In**
- Create an account with name, email, and password
- Log back in with email and password
- Forgot your password? No problem, we can send you a reset link

**Manage Decks**
- See all available decks in one place
- Each deck shows how many cards it has
- Create your own custom decks with whatever questions you want

**Study Mode**
- Pick your difficulty (easy, medium, hard) - or mix them all
- Beautiful flip card animation when you click to reveal answers
- See your progress as you work through the deck
- Mark cards as correct and watch your stats update
- Skip cards you don't want to answer

**Design & Experience**
- Works perfectly on your phone, tablet, or computer
- Nice gradients and smooth animations (not overdone)
- Easy to use, nothing confusing
- Proper color coding: green for easy, orange for medium, red for hard

---

## 🛠️ What I Used to Build This

| What | Why |
|-----|-----|
| Next.js 16 | Modern React framework, fast and flexible |
| React 19 | For building the UI components |
| TypeScript | Catches bugs before they happen |
| Tailwind CSS | Makes styling super quick and consistent |
| tailwind-variants | Reusable component styles |

---

## 📝 How I Wrote the Code

I followed some rules to keep things organized:

- Used camelCase for variables and functions
- PascalCase for components (React convention)
- Kept each component focused on one job
- Used TypeScript types for everything (prevents bugs)
- Organized files by feature (Auth, Flashcard)

When making changes, I used git commits that explain what I did:
- `feat: add new feature`
- `fix: fix a bug`
- etc.

---

## 🧪 Sample Data Included

The app comes with 3 pre-made decks so you can try it out:

1. **Japanese Hiragana** - 15 cards
2. **Japanese Katakana** - 12 cards  
3. **Basic Kanji** - 20 cards

Each deck has a mix of easy, medium, and hard cards. You can delete these and create your own whenever you want.

---

## 🚀 Deploy This Online

If you want to put it on the internet for real:

**Easiest way (Vercel):**
```bash
npm install -g vercel
vercel
```
Just follow the prompts and it's live!

You can also use Netlify, AWS, Docker, or whatever you prefer. This is built with Next.js so it works on most platforms.

---

## 📝 Commit History

Here's what I built, step by step:

1. Type definitions (User, Deck, Flashcard types)
2. Reusable UI components (buttons, inputs, cards)
3. Auth forms (login, signup, password reset)
4. Auth pages
5. Flashcard components (deck selector, levels, cards, deck creator)
6. Flashcard pages
7. Home page & polishing
8. Bug fixes for responsive design

---

## 🎯 What's Next?

There's plenty that could be added:

- Real database (MongoDB, PostgreSQL, etc)
- Actual user authentication (JWT tokens)
- Save your progress permanently
- Better stats and analytics
- Spaced repetition for smarter learning
- Dark mode
- Share decks with friends
- Mobile app version

---

## 📄 License

MIT License - Use this however you want, it's open for learning!

---

## 👤 About

Built by **Shridharan VK** (Roll: 23BCE2086)

---

## ❓ Questions?

- Check out [Next.js docs](https://nextjs.org/docs) if you're stuck
- [Tailwind CSS docs](https://tailwindcss.com/docs) for styling questions
- Or just look at the code - it's pretty readable!

---

## ✨ The Good Stuff

- ✅ Fully working flashcard app
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Type-safe code with TypeScript
- ✅ Nice looking UI
- ✅ Form validation that actually works
- ✅ Easy to customize and extend
- ✅ Clean git history with meaningful commits
- ✅ Ready to deploy

=======
# SHRIDHARAN_Flashcards
>>>>>>> 9fe195b078ae7f9378df78c30b114f7de896f8d0

