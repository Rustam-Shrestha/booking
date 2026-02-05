# Prop Passing 101: What Changed and How Props Work in React

## What Did I Change?

### 1. Modified `App.tsx`
- **Before:**
  - The `Layout` component was used without any children:
    ```jsx
    <Route path="/" element={<Layout />} />
    <Route path="/search" element={<>search page</>} />
    ```
- **After:**
  - The `Layout` component now wraps its children, passing them as props:
    ```jsx
    <Route path="/" element={<Layout><h1>Home</h1></Layout>} />
    <Route path="/search" element={<Layout><h1>Search</h1></Layout>} />
    ```

### 2. Modified `Layout.tsx`
- **Before:**
  - The `Layout` component did not accept or render children props.
- **After:**
  - The `Layout` component now accepts a `children` prop and renders it inside the layout:
    ```tsx
    interface Props {
      children: React.ReactNode;
    }
    const Layout = ({ children }: Props) => {
      return (
        ...
        <div className="container mx-auto py-10 flex-1">{children}</div>
        ...
      );
    }
    ```

### 3. Added `Footer.tsx`
- A new `Footer` component was created and included in the `Layout`.

### 4. Updated `index.css`
- Added a `.container` class for consistent styling.

---

## How Did I Pass Props?

### Step 1: Define the Prop in the Child Component
In `Layout.tsx`, define a prop called `children`:
```tsx
interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div>
      {/* ... */}
      {children}
      {/* ... */}
    </div>
  );
}
```

### Step 2: Pass Content as Children
In `App.tsx`, pass JSX as children to `Layout`:
```tsx
<Route path="/" element={<Layout><h1>Home</h1></Layout>} />
```

### Step 3: Render the Children
In `Layout.tsx`, render `{children}` where you want the nested content to appear.

---

## How Does This Make the System Work?
- **Reusability:** The `Layout` component can now wrap any content, making it reusable for different pages.
- **Composition:** You can compose pages by passing different children to `Layout`.
- **Separation of Concerns:** Layout handles the page structure, while the content is passed as children.

---

## Summary Table
| File                | What Changed                                    |
|---------------------|------------------------------------------------|
| App.tsx             | Pass children to Layout                        |
| layouts/Layout.tsx  | Accept and render children prop                |
| components/Footer.tsx | New Footer component added                   |
| index.css           | Added .container class for styling             |

---

## Example
**App.tsx:**
```tsx
<Route path="/" element={<Layout><h1>Home</h1></Layout>} />
```
**Layout.tsx:**
```tsx
const Layout = ({ children }: Props) => (
  <div>
    <Header />
    <Hero />
    <div>{children}</div>
    <Footer />
  </div>
);
```

---

**That's how prop passing works in React!**
