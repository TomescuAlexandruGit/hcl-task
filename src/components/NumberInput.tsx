import React from 'react';

interface NumberInputProps {
    label: string;
    value: number | '';
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    id: string;
}

const NumberInput: React.FC<NumberInputProps> = ({ label, value, onChange, id }) => {
    return (
        <div className="number-input">
            <label htmlFor={id}>{label}</label>
            <input id={id} type="number" value={value} onChange={onChange} />
        </div>
    );
};

export default NumberInput;
