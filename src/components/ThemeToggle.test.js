import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ThemeToggle from './ThemeToggle';

beforeEach(() => {
  window.localStorage.clear();
  document.documentElement.removeAttribute('data-theme');
});

test('follows the system preference until the visitor chooses', () => {
  render(<ThemeToggle />);
  expect(document.documentElement).not.toHaveAttribute('data-theme');
});

test('toggling pins a theme and remembers it', () => {
  render(<ThemeToggle />);

  fireEvent.click(screen.getByRole('button', { name: /switch to dark mode/i }));
  expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
  expect(window.localStorage.getItem('theme')).toBe('dark');

  fireEvent.click(screen.getByRole('button', { name: /switch to light mode/i }));
  expect(document.documentElement).toHaveAttribute('data-theme', 'light');
  expect(window.localStorage.getItem('theme')).toBe('light');
});

test('restores a stored choice on mount', () => {
  window.localStorage.setItem('theme', 'dark');
  render(<ThemeToggle />);
  expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
});
