<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
# Eventify Web App

Eventify is a responsive web application for discovering and managing events. Built with **React**, **Tailwind CSS**, and **Vite**, it provides a smooth, user-friendly interface for web and mobile users.

---

## Features

- Responsive Home, About, Events, and Contact pages  
- Interactive UI components: buttons, cards, forms, modals  
- Dynamic event categories filtering  
- Smooth navigation with React Router  
- Reusable components for scalability  
- Tailwind CSS for modern styling  

---

## Tech Stack

- **Frontend:** React, React Router DOM  
- **Styling:** Tailwind CSS, CSS3  
- **Build Tool:** Vite  
- **Icons & Animations:** Lucide React, Framer Motion  

---

## Project Structure

```

src/
│
├─ components/common/   # Navbar, Footer, Button, etc.
├─ components/          # HeroSection, EventCategories, etc.
├─ pages/               # Home, About, Events, Contact
├─ assets/              # Images and static files
├─ App.tsx              # Main App with Router
└─ main.tsx             # Entry point

````

---

## Live Demo

You can check out a live version of Eventify here:  
[Live Demo Link](https://your-live-demo-link.com)  

### Screenshots

**Home Page**  
![Home Page](./src/assets/screenshots/home.png)

**Events Page**  
![Events Page](./src/assets/screenshots/events.png)

**Contact Page**  
![Contact Page](./src/assets/screenshots/contact.png)

---

## Getting Started

1. Clone the repo:
```bash
git clone https://github.com/dinksira/Eventify-web-application.git
cd Eventify-web-application
````

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser

---

## Author

**Dinksira Elsa** – UI/UX Designer & Frontend Developer

---
>>>>>>> c94cb16650f480525dd0891ee923941ecea9394e
