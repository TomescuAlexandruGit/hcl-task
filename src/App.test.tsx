import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('displays numbers up to the entered number', () => {
  render(<App />);
  const input = screen.getByLabelText(/Max Number to Print/i);
  fireEvent.change(input, { target: { value: '5' } });
  expect(screen.getByText('1, 2, 3, 4, 5')).toBeInTheDocument();
});

test('displays area of a triangle with given height and width', () => {
  render(<App />);
  const heightInput = screen.getByLabelText(/Height/i);
  const widthInput = screen.getByLabelText(/Width/i);

  fireEvent.change(heightInput, { target: { value: '10' } });
  fireEvent.change(widthInput, { target: { value: '20' } });

  expect(screen.getByText('Area of the triangle: 100')).toBeInTheDocument();
});

