import React from 'react';
import NumberInput from './NumberInput';
import Display from './Display';
import { calculateTriangleArea } from '../utils/calculateTriangleArea';

interface TriangleAreaDisplayProps {
    height: number | '';
    width: number | '';
    onHeightChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onWidthChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TriangleAreaDisplay: React.FC<TriangleAreaDisplayProps> = ({ height, width, onHeightChange, onWidthChange }) => {
    const area = height && width ? `Area of the triangle: ${calculateTriangleArea(height, width)}` : '';
    return (
        <>
            <NumberInput id="height" label="Height" value={height} onChange={onHeightChange} />
            <NumberInput id="width" label="Width" value={width} onChange={onWidthChange} />
            <Display id="calculated-area" label="The calculated area is printed here" content={area} />
        </>
    );
};

export default TriangleAreaDisplay;
