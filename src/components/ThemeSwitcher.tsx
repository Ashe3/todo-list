import { FC, KeyboardEvent, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { motion } from 'framer-motion';

enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export const ThemeSwitcher: FC = () => {
  const [theme, setTheme] = useLocalStorage('theme', Theme.Light);

  const toggleTheme = () =>
    setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);

  useEffect(() => {
    if (theme)
      document.documentElement.classList.toggle('dark', theme === Theme.Dark);
  }, [theme]);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleTheme();
    }
  };

  return (
    <button
      aria-label="Switch theme"
      onClick={toggleTheme}
      onKeyDown={handleKeyDown}
      className="fixed top-4 right-4 text-3xl"
    >
      <motion.span
        key={theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        aria-hidden
      >
        {theme === Theme.Light ? '🌑' : '☀️'}
      </motion.span>
    </button>
  );
};
