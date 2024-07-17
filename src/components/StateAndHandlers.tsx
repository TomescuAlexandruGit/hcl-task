import React, { useState } from 'react';
import NumbersDisplay from './NumbersDisplay';
import TriangleAreaDisplay from './TriangleAreaDisplay';

const StateAndHandlers: React.FC = () => {
    const [number, setNumber] = useState<number | ''>('');
    const [height, setHeight] = useState<number | ''>('');
    const [width, setWidth] = useState<number | ''>('');

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(e.target.value === '' ? '' : parseInt(e.target.value));
    };

    const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHeight(e.target.value === '' ? '' : parseInt(e.target.value));
    };

    const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWidth(e.target.value === '' ? '' : parseInt(e.target.value));
    };

    return (
        <div>
            <NumbersDisplay number={number} onNumberChange={handleNumberChange} />
            <TriangleAreaDisplay height={height} width={width} onHeightChange={handleHeightChange} onWidthChange={handleWidthChange} />
        </div>
    );
};

export default StateAndHandlers;
