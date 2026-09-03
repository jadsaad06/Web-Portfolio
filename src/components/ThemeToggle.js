import React, { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';

const prefersDark = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

const readStoredTheme = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'light' || stored === 'dark' ? stored : null;
  } catch (error) {
    // Private mode or blocked storage: fall back to the OS preference.
    return null;
  }
};

/**
 * Light/dark switch. The visitor's choice is stored and wins over the OS
 * setting; with no choice stored the page follows prefers-color-scheme.
 * An inline script in index.html applies the stored value before first
 * paint, so this component only has to keep it in sync.
 */
const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => readStoredTheme() || (prefersDark() ? 'dark' : 'light'));
  const [isExplicit, setIsExplicit] = useState(() => readStoredTheme() !== null);

  useEffect(() => {
    const root = document.documentElement;
    if (isExplicit) {
      root.setAttribute('data-theme', theme);
    } else {
      root.removeAttribute('data-theme');
    }
  }, [theme, isExplicit]);

  // Track the OS while the visitor has not picked a side.
  useEffect(() => {
    if (isExplicit || typeof window.matchMedia !== 'function') return undefined;

    const query = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => setTheme(event.matches ? 'dark' : 'light');

    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, [isExplicit]);

  const toggle = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    setIsExplicit(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch (error) {
      // Preference just won't persist between visits.
    }
  }, [theme]);

  const goingDark = theme !== 'dark';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={goingDark ? 'Switch to dark mode' : 'Switch to light mode'}
      title={goingDark ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <i className={goingDark ? 'fas fa-moon' : 'fas fa-sun'} aria-hidden="true"></i>
    </button>
  );
};

export default ThemeToggle;
