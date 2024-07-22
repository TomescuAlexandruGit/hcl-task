import React, {act} from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TriangleAreaDisplay from './TriangleAreaDisplay';


test('renders TriangleAreaDisplay component', () => {
    render(<TriangleAreaDisplay height={0} width={0} onHeightChange={() => {}} onWidthChange={() => {}} />);
    expect(screen.getByLabelText('Height')).toBeInTheDocument();
    expect(screen.getByLabelText('Width')).toBeInTheDocument();
});

test('calculates and displays the area of a triangle', () => {
    render(<TriangleAreaDisplay height={10} width={5} onHeightChange={() => {}} onWidthChange={() => {}} />);
    expect(screen.getByText('The calculated area of the triangle is: 25')).toBeInTheDocument();
});

test('calls onHeightChange and onWidthChange when inputs change', () => {
    const handleHeightChange = jest.fn();
    const handleWidthChange = jest.fn();

    render(<TriangleAreaDisplay height={0} width={0} onHeightChange={handleHeightChange} onWidthChange={handleWidthChange} />);

    act(() => {
        fireEvent.change(screen.getByLabelText('Height'), { target: { value: '10' } });
        fireEvent.change(screen.getByLabelText('Width'), { target: { value: '5' } });
    });

    expect(handleHeightChange).toHaveBeenCalledTimes(1);
    expect(handleWidthChange).toHaveBeenCalledTimes(1);
});

test('does not accept negative numbers or decimals for height and width', () => {
    const handleHeightChange = jest.fn();
    const handleWidthChange = jest.fn();

    render(<TriangleAreaDisplay height={0} width={0} onHeightChange={handleHeightChange} onWidthChange={handleWidthChange} />);

    act(() => {
        fireEvent.change(screen.getByLabelText('Height'), { target: { value: '-5' } });
        fireEvent.change(screen.getByLabelText('Width'), { target: { value: '-10' } });
    });
    expect(screen.getByLabelText('Height')).toHaveValue(0);
    expect(screen.getByLabelText('Width')).toHaveValue(0);

    act(() => {
        fireEvent.change(screen.getByLabelText('Height'), { target: { value: '5.5' } });
        fireEvent.change(screen.getByLabelText('Width'), { target: { value: '10.5' } });
    });
    expect(screen.getByLabelText('Height')).toHaveValue(0);
    expect(screen.getByLabelText('Width')).toHaveValue(0);
});