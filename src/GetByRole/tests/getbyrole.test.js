import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import GetByRole from '../GetByRole';

test('get by role testing', () => {
  render(<GetByRole />);

  const button = screen.getAllByRole('button', { hidden: true });
  //screen.debug(screen.getAllByRole('button', { hidden: true }));
});

test('selected', () => {
  render(<GetByRole />);
  const selectedButton = screen.getByRole('tab', { selected: true });
  expect(selectedButton).toHaveTextContent('Native');
});

test('checkbox selected', () => {
  render(<GetByRole />);
  const selectedButton = screen.getByRole('checkbox', { checked: true });
});

test('current', () => {
  render(<GetByRole />);
  // const current = screen.getByRole('link', { current: false });
  // expect(current).toHaveTextContent('Thumbs down!');
});

test('pressed', () => {
  render(<GetByRole />);
  const button = screen.getByRole('button', { pressed: true });

  expect(button).toHaveTextContent('thumbs up');
});

test('expanded', () => {
  render(<GetByRole />);
  const notExpanded = screen.getByRole('link', { expanded: false });
  expect(notExpanded).toHaveTextContent('Expandable');
});

test('heading', () => {
  render(<GetByRole />);
  const heading1 = screen.getByRole('heading', { level: 1 });
  expect(heading1).toHaveTextContent('Heading Level One');
  // screen.debug(screen.getByRole('heading', { level: 1 }));

  const heading2 = screen.getAllByRole('heading', { level: 2 });
  expect(heading2).toHaveLength(2);

  const heading3 = screen.getByRole('heading', { level: 3 });
  expect(heading3).toHaveTextContent('Heading Level Three');
});

test('description', () => {
  render(<GetByRole />);

  const desc = screen.getByRole('alertdialog', { description: 'Your session is about to expire' });
});
