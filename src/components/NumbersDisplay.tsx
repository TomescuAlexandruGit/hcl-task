import React from 'react';
import NumberInput from './NumberInput';
import Display from './Display';
import { generateNumbers } from '../utils/generateNumbers';

interface NumbersDisplayProps {
    number: number | '';
    onNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumbersDisplay: React.FC<NumbersDisplayProps> = ({ number, onNumberChange }) => {
    const numbers = number ? generateNumbers(number).join(', ') : '';
    return (
        <>
            <NumberInput id="max-number" label="Max Number to Print" value={number} onChange={onNumberChange} />
            <Display id="printed-numbers" label="The printed numbers" content={numbers} />
        </>
    );
};

export default NumbersDisplay;
