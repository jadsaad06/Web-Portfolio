import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Experience from './Experience';

test('expand all opens every role, collapse all closes them', () => {
  render(<Experience />);

  expect(screen.getAllByRole('button', { expanded: false }).length).toBeGreaterThan(0);

  fireEvent.click(screen.getByRole('button', { name: /expand all/i }));
  expect(screen.queryAllByRole('button', { expanded: false })).toHaveLength(0);

  fireEvent.click(screen.getByRole('button', { name: /collapse all/i }));
  expect(screen.queryAllByRole('button', { expanded: true })).toHaveLength(0);
});

test('reveal flag survives a re-render, so toggling cannot hide a card', () => {
  const { container } = render(<Experience />);

  const items = container.querySelectorAll('.exp-item');
  expect(items.length).toBeGreaterThan(0);
  items.forEach((item) => expect(item).toHaveAttribute('data-revealed'));

  fireEvent.click(screen.getByRole('button', { name: /expand all/i }));

  container
    .querySelectorAll('.exp-item')
    .forEach((item) => expect(item).toHaveAttribute('data-revealed'));
});
