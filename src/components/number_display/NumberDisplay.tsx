import React from 'react';
import './NumberDisplay.css';

interface NumberDisplayProps {
    maxNumber: number;
    onMaxNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({ maxNumber, onMaxNumberChange }) => {
    return (
        <div className="number-printer">
            <label htmlFor="max-number-input">Max Number to Print</label>
            <input
                id="max-number-input"
                type="number"
                value={maxNumber}
                onChange={onMaxNumberChange}
                min="0"
                step="1"
            />
            <div className="printed-numbers">
                The printed numbers:
                {maxNumber && Array.from({ length: maxNumber }, (_, i) => i + 1).join(', ')}
            </div>
        </div>
    );
};

export default NumberDisplay;
