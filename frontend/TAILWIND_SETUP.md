# Tailwind CSS v4 Setup Guide for Vite + React

A step-by-step guide to set up Tailwind CSS v4 in a Vite + React project.

---

## Prerequisites

- Node.js installed (v18 or higher recommended)
- A Vite + React project already created

---

## Step 1: Install Tailwind CSS v4 Packages

Run this command in your project directory:

```bash
npm install -D tailwindcss @tailwindcss/vite
```

---

## Step 2: Configure Vite

Update your `vite.config.ts` (or `vite.config.js`) file:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

---

## Step 3: Add Tailwind to Your CSS

Update your `src/index.css` file with just one line:

```css
@import "tailwindcss";
```

---

## Step 4: Import CSS in Your App

Make sure your `src/main.tsx` imports the CSS file:

```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  // <-- This line is important
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

---

## Step 5: Start Using Tailwind Classes

Now you can use Tailwind CSS classes in your components:

```tsx
const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl font-bold">My App</h1>
    </header>
  )
}

export default Header
```

---

## Step 6: Run the Dev Server

```bash
npm run dev
```

Open your browser and you should see Tailwind styles applied!

---

## Important Notes for Tailwind v4

1. **No `tailwind.config.js` needed** - Tailwind v4 uses CSS-based configuration
2. **No `postcss.config.js` needed** - The Vite plugin handles everything
3. **Use `@import "tailwindcss"`** - Not the old `@tailwind base/components/utilities` syntax

---

## Troubleshooting

### Styles not showing?

1. **Hard refresh your browser**: Press `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. **Clear Vite cache**: Delete the `node_modules/.vite` folder and restart
3. **Verify imports**: Make sure `index.css` is imported in `main.tsx`

### Command to reset and reinstall:

```bash
rm -rf node_modules/.vite
npm run dev
```

---

## Quick Reference - Common Tailwind Classes

| Category | Example Classes |
|----------|----------------|
| Colors | `bg-blue-600`, `text-white`, `border-gray-300` |
| Spacing | `p-4`, `m-2`, `px-6`, `py-2` |
| Flexbox | `flex`, `justify-center`, `items-center`, `gap-4` |
| Typography | `text-2xl`, `font-bold`, `tracking-tight` |
| Effects | `shadow-lg`, `rounded-lg`, `hover:bg-blue-700` |
| Transitions | `transition-all`, `duration-300` |

---

## Example Component with Tailwind

```tsx
const Card = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Welcome to Tailwind CSS
      </h2>
      <p className="text-gray-600 mb-4">
        Tailwind CSS is now working in your project!
      </p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  )
}

export default Card
```

---

## Summary

| Step | Action |
|------|--------|
| 1 | `npm install -D tailwindcss @tailwindcss/vite` |
| 2 | Add `tailwindcss()` plugin to `vite.config.ts` |
| 3 | Add `@import "tailwindcss"` to `index.css` |
| 4 | Ensure `index.css` is imported in `main.tsx` |
| 5 | Use Tailwind classes in your components |
| 6 | Run `npm run dev` and enjoy! |

---

**That's it! Tailwind CSS v4 is now ready to use in your Vite + React project.** 🎉
