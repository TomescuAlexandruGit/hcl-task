import React from 'react';
import './NumberInput.css';

interface NumberInputProps {
    id: string;
    label: string;
    value: number | '';
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({ id, label, value, onChange }) => {
    return (
        <div className="number-input" id={id}>
            <label>
                {label}
                <input type="number" value={value} onChange={onChange} />
            </label>
        </div>
    );
};

export default NumberInput;
