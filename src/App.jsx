import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import AppRoutes from './routes/AppRoutes';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-page text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      <AnimatePresence mode="wait">
        <AppRoutes darkMode={darkMode} setDarkMode={setDarkMode} />
      </AnimatePresence>
    </div>
  );
}

export default App;
