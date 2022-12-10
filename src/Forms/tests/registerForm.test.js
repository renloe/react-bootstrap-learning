import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import RegisterForm from '../RegisterForm';

test('find email address label', async () => {
  render(<RegisterForm />);
  const user = userEvent.setup();

  const emailAddressInputByLabel = screen.getByLabelText('Email address');
  expect(emailAddressInputByLabel).toBeInTheDocument();

  await user.click(emailAddressInputByLabel);
  expect(emailAddressInputByLabel).toHaveFocus();
});

test('form text by text', () => {
  render(<RegisterForm />);

  const formText = screen.getByText(/never share/i);
  expect(formText).toHaveStyle({ color: 'rgb(108, 117, 125' });
});

test('password input by placeholder text', () => {
  render(<RegisterForm />);

  const passwordInput = screen.getByPlaceholderText('Password');
  expect(passwordInput).toHaveTextContent('');
});

test('password label click should focus password input', async () => {
  render(<RegisterForm />);
  const user = userEvent.setup();

  const passwordInputByLabel = screen.getByLabelText('Password');
  await user.click(passwordInputByLabel);

  expect(passwordInputByLabel).toHaveFocus();
});

test('submit button', async () => {
  render(<RegisterForm />);
  const user = userEvent.setup();
  const submitButton = screen.getByRole('button');
  const emailInput = screen.getByPlaceholderText('Enter email');
  expect(emailInput).toHaveTextContent('');
});

test('checkbox test', async () => {
  render(<RegisterForm />);
  const user = userEvent.setup();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();

  await user.click(checkbox);
  expect(checkbox).toBeChecked();
});

test('test form input validation border colors and submit button enable-disable', async () => {
  render(<RegisterForm />);
  const user = userEvent.setup();

  const emailInput = screen.getByPlaceholderText('Enter email');
  const passwordInput = screen.getByPlaceholderText('Password');
  const submitButton = screen.getByRole('button');

  expect(emailInput.getAttribute('class')).toMatch(/inputDefaultBorder/gi);
  expect(passwordInput.getAttribute('class')).toMatch(/inputDefaultBorder/gi);
  expect(submitButton).toBeDisabled();

  await user.type(emailInput, 'renloe@l');
  expect(emailInput.getAttribute('class')).toMatch(/inputErrorBorder/gi);
  await user.type(passwordInput, '123');
  expect(passwordInput.getAttribute('class')).toMatch(/inputErrorBorder/gi);
  expect(submitButton).toBeDisabled();

  await user.clear(emailInput);
  await user.clear(passwordInput);

  await user.type(emailInput, 'renloe@live.com');
  expect(emailInput.getAttribute('class')).toMatch(/inputSuccessBorder/gi);
  await user.type(passwordInput, '1234567');
  expect(passwordInput.getAttribute('class')).toMatch(/inputSuccessBorder/gi);
  expect(submitButton).toBeEnabled();

  await user.clear(emailInput);
  await user.clear(passwordInput);

  await user.type(emailInput, 'renloe@live');
  await user.type(passwordInput, '123');
  expect(emailInput.getAttribute('class')).toMatch(/inputErrorborder/gi);
  expect(passwordInput.getAttribute('class')).toMatch(/InputErrorborder/gi);
  expect(submitButton).toBeDisabled();

  await user.clear(emailInput);
  await user.clear(passwordInput);

  expect(emailInput.getAttribute('class')).toMatch(/inputdefaultborder/gi);
  expect(passwordInput.getAttribute('class')).toMatch(/inputdefaultborder/gi);
  expect(submitButton).toBeDisabled();
});
