import React from 'react';
import './Display.css';

interface DisplayProps {
    id: string;
    label: string;
    content: string;
}

const Display: React.FC<DisplayProps> = ({ id, label, content }) => {
    return (
        <div className="display" id={id}>
            <label>
                {label}
                <div className="output">{content}</div>
            </label>
        </div>
    );
};

export default Display;
