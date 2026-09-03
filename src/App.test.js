import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders the portfolio shell with its main sections', () => {
  const { container } = render(<App />);

  expect(screen.getByRole('heading', { name: /jad saad/i, level: 1 })).toBeInTheDocument();
  ['about', 'experience', 'skills', 'projects', 'education', 'contact'].forEach((id) => {
    expect(container.querySelector(`#${id}`)).toBeInTheDocument();
  });
});
