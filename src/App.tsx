import React, { useState } from 'react';
import NumberDisplay from './components/number_display/NumberDisplay';
import TriangleAreaDisplay from './components/triangle_area_calculator/TriangleAreaDisplay';
import './App.css';

const App: React.FC = () => {
    const [maxNumber, setMaxNumber] = useState<number | ''>('');
    const [height, setHeight] = useState<number | ''>('');
    const [width, setWidth] = useState<number | ''>('');

    const handleMaxNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setMaxNumber(value === '' ? '' : parseInt(value, 10));
        }
    };

    const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setHeight(value === '' ? '' : parseInt(value, 10));
        }
    };

    const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setWidth(value === '' ? '' : parseInt(value, 10));
        }
    };

    return (
        <div className="App">
            <h1>Number Printer and Area Calculator App</h1>
            <div className="content">
                <NumberDisplay maxNumber={maxNumber === '' ? 0 : maxNumber} onMaxNumberChange={handleMaxNumberChange} />
                <TriangleAreaDisplay
                    height={height === '' ? 0 : height}
                    width={width === '' ? 0 : width}
                    onHeightChange={handleHeightChange}
                    onWidthChange={handleWidthChange}
                />
            </div>
        </div>
    );
};

export default App;
