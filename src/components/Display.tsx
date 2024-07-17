import React from 'react';

interface DisplayProps {
    label: string;
    content: string;
    id: string;
}

const Display: React.FC<DisplayProps> = ({ label, content, id }) => {
    return (
        <div className="result">
            <label htmlFor={id}>
                {label}
                <div id={id} className="output">
                    {content}
                </div>
            </label>
        </div>
    );
};

export default Display;
