import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NumberDisplay from './NumberDisplay';

test('renders NumberDisplay component', () => {
    render(<NumberDisplay maxNumber={0} onMaxNumberChange={() => {}} />);
    expect(screen.getByLabelText('Max Number to Print')).toBeInTheDocument();
});

test('displays numbers from 1 to the entered max number', () => {
    const handleMaxNumberChange = jest.fn();
    render(<NumberDisplay maxNumber={5} onMaxNumberChange={handleMaxNumberChange} />);
    expect(screen.getByText('The printed numbers:1, 2, 3, 4, 5')).toBeInTheDocument();
});

test('calls onMaxNumberChange when input changes', () => {
    const handleMaxNumberChange = jest.fn();
    render(<NumberDisplay maxNumber={0} onMaxNumberChange={handleMaxNumberChange} />);
    fireEvent.change(screen.getByLabelText('Max Number to Print'), { target: { value: '3' } });
    expect(handleMaxNumberChange).toHaveBeenCalledTimes(1);
});

test('does not accept negative numbers or decimals', () => {
    const handleMaxNumberChange = jest.fn();
    render(<NumberDisplay maxNumber={0} onMaxNumberChange={handleMaxNumberChange} />);

    fireEvent.change(screen.getByLabelText('Max Number to Print'), { target: { value: '-1' } });
    expect(screen.getByLabelText('Max Number to Print')).toHaveValue(0);

    fireEvent.change(screen.getByLabelText('Max Number to Print'), { target: { value: '1.5' } });
    expect(screen.getByLabelText('Max Number to Print')).toHaveValue(0);
});
